import { useState, useEffect } from 'react';
import { User, Menu, X, Terminal, ExternalLink } from 'lucide-react';
import { LOGO_URL } from '../data';

interface NavbarProps {
  onOpenContactModal?: () => void;
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenContactModal, onOpenCommandPalette }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Learning', href: '#learning', id: 'learning' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Vision', href: '#vision', id: 'vision' },
    { label: 'Beyond Code', href: '#beyond-code', id: 'beyond-code' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0a0e17]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#0a0e17]/75 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="h-20 max-w-[1360px] mx-auto px-5 md:px-10 xl:px-20 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <img
              alt="Sapana Monogram Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
              onError={(e) => {
                // Graceful fallback if external image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-xl font-bold text-[#dfe2ef] tracking-tight group-hover:text-[#d0bcff] transition-colors">
                Sapana
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-[#262a34]/70 border border-white/10 font-mono text-[11px] text-[#4cd7f6] uppercase tracking-wider">
                AI &amp; ML Builder
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-all px-3 py-1.5 rounded-lg ${
                  isActive
                    ? 'text-[#d0bcff] font-semibold bg-[#1c1f29]/80 border border-white/10'
                    : 'text-[#cbc3d7] hover:text-[#dfe2ef] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-mono text-xs text-[#958ea0] bg-[#181b25] border border-white/10 hover:border-[#4cd7f6]/40 hover:text-[#dfe2ef] transition-colors"
              title="Command Palette (Cmd+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-[#4cd7f6]" />
              <span className="text-[11px]">⌘K</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenContactModal) {
                // If modal requested, open directly or smooth scroll
              }
            }}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider text-[#dfe2ef] bg-[#262a34]/70 border border-[#4cd7f6]/40 shadow-[0_0_12px_-2px_rgba(76,215,246,0.25)] hover:border-[#4cd7f6] hover:shadow-[0_0_18px_rgba(76,215,246,0.45)] hover:text-[#4cd7f6] transition-all duration-200"
          >
            Get in Touch
          </a>

          <a
            href="#about"
            className="w-9 h-9 rounded-full bg-[#d0bcff] flex items-center justify-center text-[#3c0091] shrink-0 hover:scale-105 active:scale-95 transition-transform shadow-md"
            title="Sapana - Profile Overview"
          >
            <User className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#262a34]/70 border border-white/10 text-[#cbc3d7] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0e17]/95 border-b border-white/10 px-6 py-4 flex flex-col gap-2 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[#dfe2ef] hover:bg-white/5 font-medium transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
              )}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-[#4cd7f6]/10 text-[#4cd7f6] font-mono text-xs uppercase tracking-wider border border-[#4cd7f6]/30 font-semibold"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
