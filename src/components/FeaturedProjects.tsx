import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { Play, ArrowUpRight, Layers } from 'lucide-react';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
}) => {
  const featuredList = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="relative py-32 px-6 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4 border border-blue-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Selected Works</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            Featured <span className="font-serif-display italic font-normal text-blue-400">Reels</span>
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed font-light">
          A showcase of bespoke CGI product reveals, spatial computing interfaces, and high-impact commercial launches.
        </p>
      </div>

      {/* Alternating Left/Right Project Cards */}
      <div className="space-y-28">
        {featuredList.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-10 lg:gap-16 group`}
            >
              {/* Video Preview Card Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="relative w-full lg:w-3/5 aspect-video rounded-3xl overflow-hidden glass-card cursor-pointer border border-white/10 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_60px_rgba(37,99,235,0.35)]"
              >
                {/* Autoplay Video Loop */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={project.posterUrl}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>

                {/* Glass Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full glass-pill text-xs font-semibold tracking-wider text-white border border-white/20">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-xs font-semibold tracking-wider text-white border border-blue-400/40">
                    {project.year}
                  </span>
                </div>

                {/* Center Hover Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.8)] border border-blue-300/50 scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-white text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Project Info Panel */}
              <div className="w-full lg:w-2/5 flex flex-col items-start space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </div>

                <h3
                  onClick={() => onSelectProject(project)}
                  className="font-syne font-bold text-3xl sm:text-4xl text-white group-hover:text-blue-300 transition-colors cursor-pointer leading-tight"
                >
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {project.shortDescription}
                </p>

                {/* Key Metrics Pill Badges */}
                {project.results && project.results.length > 0 ? (
                  <div className="flex flex-wrap gap-3 py-2">
                    {project.results.map((res, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium"
                      >
                        <span className="text-slate-400">{res.label}: </span>
                        <span className="text-blue-300 font-bold">{res.value}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* View Project Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white glass-pill hover:bg-blue-600/80 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] group/btn cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
