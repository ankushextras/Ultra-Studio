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
    <section id="faq" className="relative py-28 px-6 max-w-5xl mx-auto z-10">
      {/* Garamond Top Left Title */}
      <div className="text-left mb-10">
        <h2 className="font-garamond text-4xl sm:text-5xl lg:text-6xl text-white font-normal italic tracking-tight">
          FAQ
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
              className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.06)] bg-white/[0.06]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Question Header (No tag in front) */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-syne font-semibold text-lg sm:text-xl text-white">
                  {item.question}
                </span>

                <div
                  className={`p-2 rounded-full bg-white/10 border border-white/10 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-white/20 text-white' : 'text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Answer Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-1 text-slate-300 text-sm md:text-base leading-relaxed font-light border-t border-white/5">
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
