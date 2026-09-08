import { LOGO_URL } from '../data';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0e17] py-12 md:py-16 px-5 md:px-10 xl:px-20">
      <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Brand info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <img
            alt="Sapana Logo"
            className="h-9 w-auto object-contain shrink-0"
            src={LOGO_URL}
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div>
            <div className="font-sans text-lg font-bold text-[#dfe2ef]">
              Sapana • <span className="text-[#958ea0] font-normal text-sm">B.Tech CSE (AI &amp; ML)</span>
            </div>
            <p className="font-mono text-xs text-[#4cd7f6] mt-0.5">
              Exploring Opportunities &amp; Collaborations
            </p>
          </div>
        </div>

        {/* Center / Navigation quick links */}
        <div className="flex items-center gap-6 text-xs font-mono text-[#958ea0]">
          <a href="#about" className="hover:text-[#dfe2ef] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#dfe2ef] transition-colors">
            Skills
          </a>
          <a href="#learning" className="hover:text-[#dfe2ef] transition-colors">
            Learning
          </a>
          <a href="#projects" className="hover:text-[#dfe2ef] transition-colors">
            Projects
          </a>
          <a href="#vision" className="hover:text-[#dfe2ef] transition-colors">
            Vision
          </a>
          <a href="#contact" className="hover:text-[#dfe2ef] transition-colors">
            Contact
          </a>
        </div>

        {/* Right Socials & Scroll to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-8 h-8 rounded-lg bg-[#181b25] border border-white/10 flex items-center justify-center text-[#cbc3d7] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/40 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-8 h-8 rounded-lg bg-[#181b25] border border-white/10 flex items-center justify-center text-[#cbc3d7] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:contact@sapana.ai"
            aria-label="Email Sapana"
            className="w-8 h-8 rounded-lg bg-[#181b25] border border-white/10 flex items-center justify-center text-[#cbc3d7] hover:text-[#d0bcff] hover:border-[#d0bcff]/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-8 h-8 rounded-lg bg-[#181b25] border border-white/10 flex items-center justify-center text-[#cbc3d7] hover:text-white hover:bg-[#262a34] transition-colors ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#958ea0] gap-4">
        <span>© {new Date().getFullYear()} Sapana. All rights reserved.</span>
        <span>Designed with algorithmic precision &amp; high typographic contrast.</span>
      </div>
    </footer>
  );
}
