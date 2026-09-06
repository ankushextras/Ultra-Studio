import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, Volume2, VolumeX, ArrowRight, Shield } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
}) => {
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  if (!project) return null;

  // Find next project in list for seamless continuous browsing
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-3xl">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 pointer-events-auto"
        />

        {/* Modal Main Glass Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-6xl my-auto bg-[#000c0d]/95 border border-white/20 rounded-none md:rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.9)] z-10 text-white"
        >
          {/* Close & Sound Buttons Header */}
          <div className="sticky top-0 z-30 flex items-center justify-between p-4 md:p-6 bg-black/60 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold tracking-wider text-white border border-white/20">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Sound Toggle */}
              <button
                onClick={() => setIsAudioMuted(!isAudioMuted)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill hover:bg-white/15 text-xs font-medium border border-white/20 cursor-pointer text-white"
              >
                {isAudioMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                    <span>Sound On</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Scroll Body */}
          <div className="max-h-[85vh] overflow-y-auto p-6 md:p-10 space-y-10">
            
            {/* HD Video Player Stage */}
            <div
              onContextMenu={(e) => e.preventDefault()}
              className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card border border-white/15 shadow-2xl bg-black select-none"
            >
              {/* Subtle Protected Stream Badge */}
              <div className="absolute top-3 right-3 z-30 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase font-bold tracking-wider text-slate-300">
                <Shield className="w-3 h-3 text-blue-400" />
                <span>Protected Ultra Stream</span>
              </div>

              {project.embedUrl ? (
                <div style={{ position: 'relative', aspectRatio: '16/9' }} className="w-full h-full">
                  <iframe
                    loading="lazy"
                    title={`${project.title} — ${project.category} Video Player by Ultra Motions`}
                    src={`${project.embedUrl}?autoplay=true&loop=true`}
                    style={{
                      border: 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                    }}
                    referrerPolicy="origin"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
                  />
                </div>
              ) : (
                <video
                  autoPlay
                  loop
                  muted={isAudioMuted}
                  playsInline
                  controls
                  onContextMenu={(e) => e.preventDefault()}
                  poster={project.posterUrl}
                  className="w-full h-full object-cover select-none"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              )}
            </div>

            {/* Title & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                  {project.fullDescription}
                </p>
              </div>

              {/* Metadata Specs Sidebar */}
              <div className="glass-card p-6 rounded-2xl border border-white/15 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Services
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.services.map((s, idx) => (
                      <span key={idx} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-slate-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {project.results && project.results.length > 0 && (
                  <div className="border-t border-white/10 pt-4 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Key Outcomes
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((r, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-2.5 rounded-xl">
                          <p className="text-sm font-bold text-white font-mono">{r.value}</p>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Next Project Footer Button */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Up Next</p>
                <p className="font-syne font-bold text-lg text-white">{nextProject.title}</p>
              </div>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 transition-all shadow-lg border border-white/20 hover:border-white/40 cursor-pointer hover:scale-105"
              >
                <span>View Next Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
