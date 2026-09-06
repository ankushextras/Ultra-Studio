import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ShieldAlert, X } from 'lucide-react';

export const SecurityGuard: React.FC = () => {
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  const showSecurityNotice = (msg: string) => {
    setWarningMessage(msg);
    // Auto-dismiss warning after 3.5 seconds
    setTimeout(() => {
      setWarningMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. F12 key
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Developer tools access (F12) is disabled to protect video media.');
        return false;
      }

      const isCtrlOrMeta = e.ctrlKey || e.metaKey;

      // 2. Ctrl+Shift+I / Cmd+Option+I (Inspect)
      // 3. Ctrl+Shift+J / Cmd+Option+J (Console)
      // 4. Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
      if (
        (isCtrlOrMeta && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c'))
      ) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Developer tools shortcut is restricted. Video assets are copyrighted.');
        return false;
      }

      // 5. Ctrl+U / Cmd+Option+U (View Page Source)
      if (
        (isCtrlOrMeta && (e.key === 'u' || e.key === 'U')) ||
        (e.metaKey && e.altKey && (e.key === 'u' || e.key === 'U'))
      ) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Source code inspection is protected.');
        return false;
      }

      // 6. Ctrl+S / Cmd+S (Save webpage)
      if (isCtrlOrMeta && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Page saving is disabled to protect high-definition video assets.');
        return false;
      }
    };

    // Prevent context menu (Right-click) on the page to prevent "Inspect", "Save video as", etc.
    const handleContextMenu = (e: MouseEvent) => {
      // Check if target is in an interactive input/textarea before blocking
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      e.preventDefault();
      showSecurityNotice('Right-click inspection & asset saving are restricted.');
    };

    // Prevent dragging videos and images out of the browser
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.tagName === 'IFRAME')) {
        e.preventDefault();
      }
    };

    // Register listeners on window
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('contextmenu', handleContextMenu, true);
    window.addEventListener('dragstart', handleDragStart, true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('contextmenu', handleContextMenu, true);
      window.removeEventListener('dragstart', handleDragStart, true);
    };
  }, []);

  return (
    <aside aria-label="Security notifications">
      <AnimatePresence>
        {warningMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-[9999] max-w-sm p-4 rounded-2xl glass-card border border-red-500/30 bg-[#000c0d]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-start gap-3.5 text-white"
          >
            <div className="p-2 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 shrink-0">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1 text-xs space-y-1">
              <div className="font-syne font-bold uppercase tracking-wider text-red-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>Security Notice</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-normal">{warningMessage}</p>
            </div>
            <button
              onClick={() => setWarningMessage(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              title="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
