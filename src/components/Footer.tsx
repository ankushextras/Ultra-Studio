import React from 'react';
import { ArrowUp, Sparkles, Instagram, Twitter, MessageSquare } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-12 px-6 max-w-7xl mx-auto z-10 text-slate-400 text-xs">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
        {/* Brand */}
        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-syne font-bold text-white tracking-widest text-base">
              ULTRA STUDIO
            </span>
          </div>
          <p className="font-light text-slate-400 text-xs max-w-md">
            High-end motion graphics and video editing studio for SaaS and tech companies.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full glass-pill text-slate-300 hover:text-white hover:bg-white/15 border border-white/15 transition-colors"
            title="Instagram"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full glass-pill text-slate-300 hover:text-white hover:bg-white/15 border border-white/15 transition-colors"
            title="Discord"
            aria-label="Discord"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full glass-pill text-slate-300 hover:text-white hover:bg-white/15 border border-white/15 transition-colors"
            title="Twitter"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all border border-white/30 cursor-pointer shadow-lg"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Thin Bottom Line */}
      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} ULTRA STUDIO INC. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate('faq')} className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </button>
          <button onClick={() => onNavigate('faq')} className="hover:text-slate-300 transition-colors">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};
