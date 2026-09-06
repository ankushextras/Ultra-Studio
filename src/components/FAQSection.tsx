import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  items: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" aria-label="Frequently Asked Questions & About Ultra Motions" className="relative py-28 px-6 max-w-5xl mx-auto z-10">
      {/* Sitelink anchor for About */}
      <div id="about" className="sr-only" tabIndex={-1} />

      {/* Garamond Top Left Title */}
      <div className="text-left mb-10">
        <h2 className="font-garamond text-4xl sm:text-5xl lg:text-6xl text-white font-normal italic tracking-tight">
          FAQ <span className="sr-only">— About Ultra Motions</span>
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {items.map((item) => {
          const isOpen = openId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={false}
              className={`rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-2xl ${
                isOpen
                  ? 'bg-[#000607]/95 border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.95)]'
                  : 'bg-[#000607]/75 hover:bg-[#000607]/90 border border-white/[0.07] hover:border-white/15 shadow-[0_6px_24px_rgba(0,0,0,0.65)]'
              }`}
            >
              {/* Question Header (No tag in front) */}
              <button
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-syne font-semibold text-lg sm:text-xl text-white">
                  {item.question}
                </span>

                <div
                  className={`p-2 rounded-full border transition-transform duration-300 ${
                    isOpen
                      ? 'rotate-180 bg-white/15 text-white border-white/20'
                      : 'bg-white/[0.03] text-slate-400 border-white/[0.08]'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Answer Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-1 text-slate-300 text-sm md:text-base leading-relaxed font-light border-t border-white/[0.06]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
