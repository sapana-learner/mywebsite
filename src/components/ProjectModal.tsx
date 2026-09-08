import { Project } from '../types';
import { X, ExternalLink, Code2, Layers, Cpu, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#181b25] border border-white/15 p-6 sm:p-8 shadow-2xl text-[#dfe2ef]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#262a34]/80 text-[#958ea0] hover:text-white hover:bg-[#31353f] transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-[#4cd7f6] font-bold tracking-wider">
            {project.code}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/20"></span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#262a34] text-[#d0bcff] border border-white/10">
            {project.tag}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#dfe2ef] mb-2">{project.title}</h2>
        <p className="font-mono text-xs text-[#4cd7f6] mb-6">{project.category}</p>

        {/* Overview */}
        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#958ea0] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#4cd7f6]" />
            Architecture Overview
          </h3>
          <p className="text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
            {project.fullOverview}
          </p>
          <div className="p-4 rounded-xl bg-[#0a0e17]/80 border border-white/5 font-mono text-xs text-[#d0bcff] leading-relaxed">
            <span className="text-[#958ea0] block mb-1">PIPELINE FLOW:</span>
            {project.architectureSummary}
          </div>
        </div>

        {/* Specs Table */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#958ea0] mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#d0bcff]" />
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.specs.map((spec, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#1c1f29]/70 border border-white/5 flex flex-col"
              >
                <span className="font-mono text-[11px] text-[#958ea0]">{spec.label}</span>
                <span className="text-sm font-semibold text-[#dfe2ef] mt-0.5">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Tags */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#958ea0] mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#c0c1ff]" />
            Technologies &amp; Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-[#262a34]/80 text-[#dfe2ef] font-mono text-xs border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#958ea0]">
            <CheckCircle2 className="w-4 h-4 text-[#4cd7f6]" />
            <span>Honest Project Roadmap (Actively Maintained)</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#262a34] hover:bg-[#31353f] text-[#dfe2ef] font-mono text-xs font-semibold border border-white/10 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold hover:bg-[#acedff] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
