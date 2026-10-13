import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ShieldAlert, X, Lock } from 'lucide-react';

export const SecurityGuard: React.FC = () => {
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showSecurityNotice = useCallback((msg: string) => {
    setWarningMessage(msg);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Auto-dismiss warning after 3.8 seconds
    timeoutRef.current = setTimeout(() => {
      setWarningMessage(null);
    }, 3800);
  }, []);

  useEffect(() => {
    // 1. Watermark & Console Anti-Inspection Notice
    try {
      console.clear();
      console.log(
        '%c🔒 ULTRA MOTIONS PROTECTED REEL',
        'font-family: sans-serif; font-size: 26px; font-weight: 900; color: #3b82f6; text-shadow: 0 0 12px rgba(59,130,246,0.6);'
      );
      console.log(
        '%cAll video streams, motion graphics reels, sound design, and creative code are copyrighted property of Ultra Motions. Inspection, unauthorized download, or source scraping is restricted.',
        'font-family: sans-serif; font-size: 13px; color: #94a3b8; font-weight: 500;'
      );
    } catch {
      // Ignore in restricted environments
    }

    // 2. Comprehensive Keyboard Shortcuts Blocker
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      const key = (e.key || '').toLowerCase();
      const code = (e.code || '').toLowerCase();
      const keyCode = e.keyCode || e.which;

      // F12 key (Windows, Mac, Linux)
      if (key === 'f12' || code === 'f12' || keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Developer tools access (F12) is disabled to protect video media.');
        return false;
      }

      // DevTools Inspection Shortcuts:
      // - Ctrl+Shift+I / Cmd+Option+I (Inspect Elements)
      // - Ctrl+Shift+J / Cmd+Option+J (Console)
      // - Ctrl+Shift+C / Cmd+Option+C (Element Picker)
      // - Ctrl+Shift+K / Cmd+Option+K (Firefox Web Console)
      // - Ctrl+Shift+E / Cmd+Option+E (Firefox Network)
      // - Ctrl+Shift+M / Cmd+Option+M (Device Mode)
      // - Ctrl+Shift+P / Cmd+Shift+P (DevTools Command Palette)
      // - Ctrl+Shift+S / Cmd+Shift+S (Screenshot Tool)
      if (
        (isCtrlOrMeta && (e.shiftKey || e.altKey)) ||
        (e.altKey && e.metaKey)
      ) {
        const restrictedKeys = ['i', 'j', 'c', 'k', 'e', 'm', 'p', 's', 'd'];
        const restrictedCodes = [
          'keyi', 'keyj', 'keyc', 'keyk', 'keye', 'keym', 'keyp', 'keys', 'keyd'
        ];

        if (restrictedKeys.includes(key) || restrictedCodes.includes(code)) {
          e.preventDefault();
          e.stopPropagation();
          showSecurityNotice('Developer inspection shortcut is blocked. All video assets are protected.');
          return false;
        }
      }

      // View Source: Ctrl+U / Cmd+U / Cmd+Option+U
      if (isCtrlOrMeta && (key === 'u' || code === 'keyu' || keyCode === 85)) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Viewing page source is restricted.');
        return false;
      }

      // Save Page: Ctrl+S / Cmd+S
      if (isCtrlOrMeta && (key === 's' || code === 'keys' || keyCode === 83)) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Saving this page or its media assets is disabled.');
        return false;
      }

      // Print / PDF Dump: Ctrl+P / Cmd+P
      if (isCtrlOrMeta && (key === 'p' || code === 'keyp' || keyCode === 80)) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Page printing and asset extraction are restricted.');
        return false;
      }
    };

    // 3. Right-Click Context Menu Blocker (except inside form inputs for editing)
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice('Right-click inspection & asset saving are restricted to protect videos.');
      return false;
    };

    // 4. Auxiliary Click (Middle-click & Right-click click events)
    const handleAuxClick = (e: MouseEvent) => {
      if (e.button === 2) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 5. Drag & Drop Blocker for Media (prevents dragging videos/images to new tab or desktop)
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'IMG' ||
          target.tagName === 'VIDEO' ||
          target.tagName === 'IFRAME' ||
          target.closest('video') ||
          target.closest('iframe'))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 6. Media Selection Blocker
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      if (
        target &&
        (target.tagName === 'IMG' ||
          target.tagName === 'VIDEO' ||
          target.tagName === 'IFRAME' ||
          target.closest('video') ||
          target.closest('iframe'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 7. DevTools Window Docking Detection
    let devToolsOpen = false;
    const checkDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;

      if (widthThreshold || heightThreshold) {
        if (!devToolsOpen) {
          devToolsOpen = true;
          showSecurityNotice('Developer tools detected. Content protection active.');
        }
      } else {
        devToolsOpen = false;
      }
    };

    // Register active capture-phase listeners on window
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('contextmenu', handleContextMenu, true);
    window.addEventListener('auxclick', handleAuxClick, true);
    window.addEventListener('dragstart', handleDragStart, true);
    window.addEventListener('selectstart', handleSelectStart, true);
    window.addEventListener('resize', checkDevTools);

    const devToolsInterval = setInterval(checkDevTools, 1500);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('contextmenu', handleContextMenu, true);
      window.removeEventListener('auxclick', handleAuxClick, true);
      window.removeEventListener('dragstart', handleDragStart, true);
      window.removeEventListener('selectstart', handleSelectStart, true);
      window.removeEventListener('resize', checkDevTools);
      clearInterval(devToolsInterval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showSecurityNotice]);

  return (
    <aside aria-label="Security notifications" className="pointer-events-none select-none">
      <AnimatePresence>
        {warningMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 22, stiffness: 320 }}
            className="fixed bottom-6 right-6 z-[9999] pointer-events-auto max-w-sm p-4 rounded-2xl glass-card border border-blue-500/40 bg-[#000c0d]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.2)] flex items-start gap-3.5 text-white"
          >
            <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 shrink-0">
              <Lock className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1 text-xs space-y-1">
              <div className="font-syne font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>Media Protected</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-normal">{warningMessage}</p>
            </div>
            <button
              onClick={() => setWarningMessage(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              title="Close notification"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
