import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import LearningSection from './components/LearningSection';
import ProjectsSection from './components/ProjectsSection';
import VisionSection from './components/VisionSection';
import BeyondCodeSection from './components/BeyondCodeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpenCommandPalette = () => {
      setCommandPaletteOpen(true);
    };

    window.addEventListener('open-command-palette', handleOpenCommandPalette);
    return () => window.removeEventListener('open-command-palette', handleOpenCommandPalette);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-[#dfe2ef] relative flex flex-col font-sans selection:bg-[#a078ff] selection:text-white">
      {/* Top Fixed Sticky Navigation */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <LearningSection />
        <ProjectsSection />
        <VisionSection />
        <BeyondCodeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
