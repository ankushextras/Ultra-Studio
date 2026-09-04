import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { ContactFormData } from '../types';
import { Send, CheckCircle, Sparkles, DollarSign } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    budget: '$299',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    { value: '$99', label: 'Starter' },
    { value: '$299', label: 'Standard' },
    { value: '$499', label: 'Premium' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration Effect
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#e2e8f0', '#94a3b8', '#38bdf8'],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 max-w-5xl mx-auto z-10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-600/10 via-indigo-500/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Large Centered Heading */}
      <div className="text-center mb-14 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] text-slate-200 text-xs font-medium tracking-wide border border-white/15 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-white/80" />
          <span>Start a Project</span>
        </div>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Create ideas to motion
        </h2>
        <p className="text-slate-400 text-base md:text-lg font-normal max-w-xl mx-auto leading-relaxed">
          Tell us about your project vision and we'll craft a bespoke 3D production pipeline for you.
        </p>
      </div>

      {/* Glass Contact Form with Specular Bevel Highlights & Deep Multi-layered Shadows */}
      <div className="max-w-3xl mx-auto bg-white/[0.035] p-7 sm:p-12 rounded-[2.5rem] border border-white/20 shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.35),inset_0_-2px_4px_rgba(0,0,0,0.7)] backdrop-blur-3xl relative overflow-hidden font-outfit">
        {/* Top Edge Specular Highlight */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
        
        {/* Soft Ambient Inner Corner Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center space-y-6 relative z-10 font-outfit"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/30 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(255,255,255,0.2),inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-outfit font-bold text-3xl text-white tracking-tight">Message Received</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto font-normal leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have logged your request and our lead director will respond shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-7 py-3.5 rounded-2xl text-xs font-semibold tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all cursor-pointer"
            >
              Send Another Request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7 relative z-10 font-outfit">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium tracking-wide text-slate-200">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-white/[0.07] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all text-sm backdrop-blur-xl font-outfit font-normal"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium tracking-wide text-slate-200">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-white/[0.07] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all text-sm backdrop-blur-xl font-outfit font-normal"
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="block text-sm font-medium tracking-wide text-slate-200">
                Company or Studio
              </label>
              <input
                type="text"
                placeholder="Studio or brand name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-white/[0.07] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all text-sm backdrop-blur-xl font-outfit font-normal"
              />
            </div>

            {/* Large Interactive Glass Budget Selection */}
            <div className="space-y-2.5 pt-1">
              <label className="block text-sm font-medium tracking-wide text-slate-200">
                Select Budget Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {budgetOptions.map((opt) => {
                  const isSelected = formData.budget === opt.value;
                  return (
                    <motion.button
                      type="button"
                      key={opt.value}
                      onClick={() => setFormData({ ...formData, budget: opt.value })}
                      whileHover={{ scale: 1.025, y: -2 }}
                      whileTap={{ scale: 0.95, y: 1 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                      className={`relative p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer overflow-hidden border ${
                        isSelected
                          ? 'bg-white/[0.14] border-white/55 shadow-[0_12px_35px_rgba(255,255,255,0.12),inset_0_1px_2px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.4)]'
                          : 'bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_2px_4px_rgba(0,0,0,0.3)]'
                      }`}
                    >
                      {/* Glass specular sweep line for selected tier */}
                      {isSelected && (
                        <motion.div
                          layoutId="budget-highlight"
                          className="absolute inset-0 bg-gradient-to-b from-white/[0.12] via-transparent to-transparent pointer-events-none"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}

                      <div className="relative z-10 flex flex-col justify-between h-full space-y-2 font-outfit">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                            {opt.value}
                          </span>
                          <span
                            className={`w-3.5 h-3.5 rounded-full border transition-all ${
                              isSelected
                                ? 'bg-white border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                                : 'border-white/20 bg-transparent'
                            }`}
                          />
                        </div>
                        <div>
                          <p className={`text-xs font-semibold tracking-wide ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                            {opt.label}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Description Box */}
            <div className="space-y-2 pt-1">
              <label className="block text-sm font-medium tracking-wide text-slate-200">
                Description
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your project vision, deliverables, or reference styles..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-white/[0.07] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all text-sm resize-none backdrop-blur-xl font-outfit font-normal"
              />
            </div>

            {/* Ultra-Glassy Submit Button with Specular Highlights & Bevel Reflections */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985, y: 1 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className="w-full py-4.5 px-7 rounded-2xl text-sm font-semibold tracking-wide text-white bg-gradient-to-b from-white/[0.18] via-white/[0.10] to-white/[0.05] hover:from-white/[0.28] hover:via-white/[0.16] hover:to-white/[0.08] transition-all duration-300 shadow-[0_16px_45px_rgba(0,0,0,0.7),0_0_35px_rgba(255,255,255,0.08),inset_0_1.5px_2px_rgba(255,255,255,0.75),inset_0_-2px_4px_rgba(0,0,0,0.6)] border border-white/40 hover:border-white/70 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 backdrop-blur-3xl relative overflow-hidden group"
            >
              {/* Glass Top Specular Line */}
              <div className="absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

              {/* Dynamic Light Shimmer Sweep on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              {isSubmitting ? (
                <span className="font-outfit font-medium">Dispatching Request...</span>
              ) : (
                <>
                  <span className="font-outfit font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    Send Project Request
                  </span>
                  <Send className="w-4 h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

