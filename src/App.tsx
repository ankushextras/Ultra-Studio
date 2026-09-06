import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CaseStudyCarousel } from './components/3DCaseStudyCarousel';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SecurityGuard } from './components/SecurityGuard';
import { PROJECTS_DATA, FAQ_DATA } from './data/portfolioData';
import { Project, SectionId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  // Smooth scroll navigate to section
  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy to update active nav section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['home', 'case-studies', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000c0d] text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Moving Canvas Gradient Background (Dark -> #000c0d) */}
      <BackgroundCanvas />

      {/* Video & Asset Protection Guard against F12, Ctrl+Shift+I, Right-Click, and Inspection */}
      <SecurityGuard />

      {/* ULTRA MOTION Floating Glass Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMuted={isAudioMuted}
        onToggleMute={() => setIsAudioMuted(!isAudioMuted)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        {/* Fullscreen Video Hero Section */}
        <HeroSection onNavigate={handleNavigate} isMuted={isAudioMuted} />

        {/* 5 Case Studies Interactive Arch Reel Carousel */}
        <CaseStudyCarousel
          projects={PROJECTS_DATA}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Clean Minimal FAQ Accordion */}
        <FAQSection items={FAQ_DATA} />

        {/* Contact Brief Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Fullscreen Case Study Popup Modal */}
      <CaseStudyModal
        project={selectedProject}
        allProjects={PROJECTS_DATA}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </div>
  );
}
