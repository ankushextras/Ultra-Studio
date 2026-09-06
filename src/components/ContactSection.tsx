import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { ContactFormData } from '../types';
import { 
  Send, 
  CheckCircle, 
  Sparkles, 
  Check
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    website: '',
    country: '',
    whatsapp: '',
    socials: '',
    videoType: 'SaaS Explainer',
    hasScript: 'In progress / Draft',
    hasStoryboard: 'Rough ideas / In progress',
    videoLength: '60 Seconds',
    deadlineWeeks: '3',
    budget: '',
    moreAboutProject: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const videoTypeOptions = [
    { id: 'SaaS Explainer', label: 'SaaS Explainer' },
    { id: 'Featured Video', label: 'Featured Video' },
    { id: 'Launch Video', label: 'Launch Video' },
    { id: 'Talking Head Videos', label: 'Talking Head Videos' },
  ];

  const scriptOptions = [
    'Yes, ready to animate',
    'In progress / Draft',
    'No, need scriptwriting',
  ];

  const storyboardOptions = [
    'Yes, approved storyboard',
    'Rough ideas / In progress',
    'No, need storyboarding',
  ];

  const lengthOptions = [
    '15 Seconds',
    '30 Seconds',
    '60 Seconds',
    '90+ Seconds',
  ];

  const deadlineOptions = [
    { value: '1', label: '1 Week' },
    { value: '2', label: '2 Weeks' },
    { value: '3', label: '3 Weeks' },
    { value: '4', label: '4 Weeks' },
    { value: '5', label: '5+ Weeks' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration Effect
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#e2e8f0', '#94a3b8', '#38bdf8', '#00f2fe'],
      });
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      website: '',
      country: '',
      whatsapp: '',
      socials: '',
      videoType: 'SaaS Explainer',
      hasScript: 'In progress / Draft',
      hasStoryboard: 'Rough ideas / In progress',
      videoLength: '60 Seconds',
      deadlineWeeks: '3',
      budget: '',
      moreAboutProject: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 max-w-5xl mx-auto z-10">
      {/* Ambient background glow matching #000c0d */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#000c0d]/60 via-[#000c0d]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />

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
          Tell us about your project vision and we'll craft a bespoke motion graphics production pipeline for you.
        </p>
      </div>

      {/* Glass Contact Form with Specular Bevel Highlights & Deep Multi-layered Shadows */}
      <div className="max-w-4xl mx-auto bg-[#000607]/85 p-6 sm:p-12 rounded-[2.5rem] border border-white/15 shadow-[0_24px_70px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.8)] backdrop-blur-3xl relative overflow-hidden font-outfit">
        {/* Top Edge Specular Highlight */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
        
        {/* Soft Ambient Inner Corner Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#000c0d]/60 rounded-full blur-3xl pointer-events-none" />

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center space-y-6 relative z-10 font-outfit"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/30 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(255,255,255,0.2),inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-outfit font-bold text-3xl text-white tracking-tight">Project Brief Received</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto font-normal leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span> from <span className="text-white font-semibold">{formData.company || 'your team'}</span>. We have logged your request for <span className="text-white font-semibold">{formData.videoType}</span> (Target delivery: {formData.deadlineWeeks} {formData.deadlineWeeks === '1' ? 'week' : 'weeks'}). Our creative team will review your brief and contact you shortly at <span className="text-white font-semibold">{formData.email}</span>.
            </p>
            <button
              onClick={resetForm}
              className="mt-4 px-7 py-3.5 rounded-2xl text-xs font-semibold tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all cursor-pointer"
            >
              Send Another Project Request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10 font-outfit">
            
            {/* SECTION 1: Client & Studio Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-semibold text-white">
                  1
                </span>
                <h3 className="text-base font-semibold text-white tracking-wide">
                  Your Information
                </h3>
              </div>

              {/* Your Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm font-normal"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Company Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp / Studio"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm font-normal"
                  />
                </div>
              </div>

              {/* Email & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm font-normal"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Website
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. company.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm font-normal"
                  />
                </div>
              </div>

              {/* Country, WhatsApp (Optional numbers only), Socials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Country */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Country <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm font-normal"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                      WhatsApp
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Optional
                    </span>
                  </div>
                  <input
                    type="tel"
                    placeholder="+1 000 000"
                    value={formData.whatsapp}
                    onChange={(e) => {
                      // Allow numbers, spaces, and leading plus
                      const formatted = e.target.value.replace(/[^0-9+ ]/g, '');
                      setFormData({ ...formData, whatsapp: formatted });
                    }}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm font-normal font-mono"
                  />
                </div>

                {/* Instagram or Socials */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Instagram or Socials
                  </label>
                  <input
                    type="text"
                    placeholder="@handle"
                    value={formData.socials}
                    onChange={(e) => setFormData({ ...formData, socials: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm font-normal"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: Project Informations */}
            <div className="space-y-7 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-semibold text-white">
                  2
                </span>
                <h3 className="text-base font-semibold text-white tracking-wide">
                  Project Information
                </h3>
              </div>

              {/* What type of video do you need? */}
              <div className="space-y-3">
                <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                  What type of video do you need? <span className="text-blue-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {videoTypeOptions.map((opt) => {
                    const isSelected = formData.videoType === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, videoType: opt.id })}
                        className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border flex items-center justify-between ${
                          isSelected
                            ? 'bg-white/[0.14] border-white/50 shadow-[0_8px_24px_rgba(255,255,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.3)]'
                            : 'bg-[#000809]/70 border-white/10 hover:border-white/25 hover:bg-[#000a0b]'
                        }`}
                      >
                        <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {opt.label}
                        </span>
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all shrink-0 ml-2 ${
                            isSelected
                              ? 'bg-white border-white text-black'
                              : 'border-white/20 bg-transparent text-transparent'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Do you have script & Do you have storyboard */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Do you have script */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Do you have a script? <span className="text-blue-400">*</span>
                  </label>
                  <div className="space-y-2">
                    {scriptOptions.map((opt) => {
                      const isSelected = formData.hasScript === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, hasScript: opt })}
                          className={`w-full px-4 py-3 rounded-xl text-left text-xs font-medium transition-all cursor-pointer border flex items-center justify-between ${
                            isSelected
                              ? 'bg-white/[0.15] border-white/50 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]'
                              : 'bg-[#000809]/60 border-white/10 text-slate-300 hover:border-white/20 hover:bg-[#000809]'
                          }`}
                        >
                          <span>{opt}</span>
                          <span
                            className={`w-3.5 h-3.5 rounded-full border transition-all ${
                              isSelected
                                ? 'bg-white border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                                : 'border-white/25 bg-transparent'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Do you have storyboard */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Do you have a storyboard? <span className="text-blue-400">*</span>
                  </label>
                  <div className="space-y-2">
                    {storyboardOptions.map((opt) => {
                      const isSelected = formData.hasStoryboard === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, hasStoryboard: opt })}
                          className={`w-full px-4 py-3 rounded-xl text-left text-xs font-medium transition-all cursor-pointer border flex items-center justify-between ${
                            isSelected
                              ? 'bg-white/[0.15] border-white/50 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]'
                              : 'bg-[#000809]/60 border-white/10 text-slate-300 hover:border-white/20 hover:bg-[#000809]'
                          }`}
                        >
                          <span>{opt}</span>
                          <span
                            className={`w-3.5 h-3.5 rounded-full border transition-all ${
                              isSelected
                                ? 'bg-white border-white shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                                : 'border-white/25 bg-transparent'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Planned video length */}
              <div className="space-y-2.5">
                <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                  Planned Video Length
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {lengthOptions.map((len) => {
                    const isSelected = formData.videoLength === len;
                    return (
                      <button
                        type="button"
                        key={len}
                        onClick={() => setFormData({ ...formData, videoLength: len })}
                        className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] font-semibold'
                            : 'bg-[#000809]/70 border-white/15 text-slate-300 hover:border-white/30 hover:bg-white/5'
                        }`}
                      >
                        {len}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Deadline - by weeks 1 2 3 4 5 */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Deadline (Weeks) <span className="text-blue-400">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    Selected: {formData.deadlineWeeks} {formData.deadlineWeeks === '1' ? 'Week' : 'Weeks'}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {deadlineOptions.map((d) => {
                    const isSelected = formData.deadlineWeeks === d.value;
                    return (
                      <button
                        type="button"
                        key={d.value}
                        onClick={() => setFormData({ ...formData, deadlineWeeks: d.value })}
                        className={`p-3 rounded-xl text-center transition-all cursor-pointer border flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-white/[0.18] border-white/60 text-white shadow-[0_4px_16px_rgba(255,255,255,0.12),inset_0_1px_1px_rgba(255,255,255,0.4)]'
                            : 'bg-[#000809]/70 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                        }`}
                      >
                        <span className="text-sm font-bold tracking-tight text-white">
                          {d.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget by $ (manual enter by client just numbers to be typed or otherwise dont type) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                    Budget (USD $) <span className="text-blue-400">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Numbers only
                  </span>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-4 pointer-events-none text-white font-semibold text-base flex items-center">
                    $
                  </div>
                  <input
                    type="text"
                    required
                    inputMode="numeric"
                    placeholder="2500"
                    value={formData.budget}
                    onChange={(e) => {
                      // Manual enter by client just numbers to be typed or otherwise dont type
                      const digitsOnly = e.target.value.replace(/[^0-9]/g, '');
                      setFormData({ ...formData, budget: digitsOnly });
                    }}
                    className="w-full pl-9 pr-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm font-mono font-medium"
                  />
                </div>
              </div>

              {/* More About Project */}
              <div className="space-y-2">
                <label className="block text-xs font-medium tracking-wider uppercase text-slate-300">
                  More About Project <span className="text-blue-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project goals, references, target audience, core deliverables, or any links you would like to share..."
                  value={formData.moreAboutProject}
                  onChange={(e) => setFormData({ ...formData, moreAboutProject: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#000809]/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/45 focus:bg-[#000a0b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all text-sm resize-none font-normal"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99, y: 1 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className="w-full py-4.5 px-7 rounded-2xl text-sm font-semibold tracking-wide text-white bg-gradient-to-b from-white/[0.18] via-white/[0.10] to-white/[0.05] hover:from-white/[0.28] hover:via-white/[0.16] hover:to-white/[0.08] transition-all duration-300 shadow-[0_16px_45px_rgba(0,0,0,0.7),0_0_35px_rgba(255,255,255,0.08),inset_0_1.5px_2px_rgba(255,255,255,0.75),inset_0_-2px_4px_rgba(0,0,0,0.6)] border border-white/40 hover:border-white/70 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 backdrop-blur-3xl relative overflow-hidden group"
            >
              {/* Glass Top Specular Line */}
              <div className="absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

              {/* Dynamic Light Shimmer Sweep on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              {isSubmitting ? (
                <span className="font-outfit font-medium">Dispatching Project Brief...</span>
              ) : (
                <>
                  <span className="font-outfit font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    Send Project Brief
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
