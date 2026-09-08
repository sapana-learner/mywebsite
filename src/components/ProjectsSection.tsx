import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ShieldCheck, Code, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 px-5 md:px-10 xl:px-20 max-w-[1360px] mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-md bg-[#262a34]/70 border border-white/10 font-mono text-[11px] text-[#d0bcff] uppercase tracking-wider">
              Architecture Showcase
            </span>
            <span className="h-px w-12 bg-white/10"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#dfe2ef] tracking-tight">
            Featured Builds &amp; Prototypes
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#958ea0]">
          <ShieldCheck className="w-4 h-4 text-[#4cd7f6]" />
          <span>Honest Project Roadmap • Active Capstone Concepts</span>
        </div>
      </div>

      {/* 3 Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-[#181b25]/75 border border-white/10 p-5 md:p-6 flex flex-col justify-between shadow-xl group hover:border-white/25 hover:scale-[1.01] transition-all duration-300"
          >
            <div>
              {/* Visual Blueprint Area */}
              <div className="h-44 rounded-xl bg-[#0a0e17]/90 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden mb-5">
                <div className="flex items-center justify-between z-10">
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wider ${
                      project.id === 'project-1'
                        ? 'text-[#d0bcff]'
                        : project.id === 'project-2'
                        ? 'text-[#4cd7f6]'
                        : 'text-[#c0c1ff]'
                    }`}
                  >
                    {project.code}
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#262a34] text-[#958ea0] border border-white/10">
                    {project.tag}
                  </span>
                </div>

                {/* Blueprint Visualization per project */}
                {project.diagramType === 'rag' && (
                  <div className="flex items-center justify-center my-auto z-10 w-full">
                    <svg className="w-full h-16 text-[#d0bcff]/40" fill="none" stroke="currentColor" viewBox="0 0 300 60">
                      <circle cx="40" cy="30" r="14" strokeWidth="2" className="text-[#d0bcff] stroke-current" />
                      <path d="M54 30 H110" strokeWidth="1.5" strokeDasharray="3 3" />
                      <rect x="110" y="16" width="80" height="28" rx="4" strokeWidth="2" className="text-[#4cd7f6] stroke-current" />
                      <path d="M190 30 H246" strokeWidth="1.5" strokeDasharray="3 3" />
                      <circle cx="260" cy="30" r="14" strokeWidth="2" className="text-[#c0c1ff] stroke-current" />
                      <text x="122" y="34" fill="currentColor" fontFamily="JetBrains Mono" fontSize="10" className="text-[#dfe2ef] fill-current">
                        RAG_CHAIN
                      </text>
                    </svg>
                  </div>
                )}

                {project.diagramType === 'sparkline' && (
                  <div className="flex items-center justify-center my-auto z-10 w-full">
                    <svg className="w-full h-16 text-[#4cd7f6]/70" fill="none" stroke="currentColor" viewBox="0 0 300 60">
                      <path
                        d="M10 45 L50 40 L90 48 L130 25 L170 32 L210 15 L250 20 L290 8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="stroke-current"
                      />
                      <path
                        d="M10 45 L50 40 L90 48 L130 25 L170 32 L210 15 L250 20 L290 8 L290 60 L10 60 Z"
                        fill="currentColor"
                        fillOpacity="0.12"
                      />
                    </svg>
                  </div>
                )}

                {project.diagramType === 'nodes' && (
                  <div className="flex items-center justify-center my-auto z-10 font-mono text-xs text-[#c0c1ff] space-x-2">
                    <div className="border border-[#c0c1ff]/40 px-2.5 py-1 rounded bg-[#c0c1ff]/10">
                      [Node_A]
                    </div>
                    <span className="text-[#958ea0]">↔</span>
                    <div className="border border-[#4cd7f6]/40 px-2.5 py-1 rounded bg-[#4cd7f6]/10 text-[#4cd7f6]">
                      [Node_B]
                    </div>
                    <span className="text-[#958ea0]">↔</span>
                    <div className="border border-[#d0bcff]/40 px-2.5 py-1 rounded bg-[#d0bcff]/10 text-[#d0bcff]">
                      [Node_C]
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-[#958ea0] font-mono text-[11px] z-10">
                  <span>{project.category.split('•')[0]}</span>
                  <span>{project.category.split('•')[1] || ''}</span>
                </div>

                {/* Ambient glow in corner */}
                <div
                  className={`absolute -right-8 -bottom-8 w-28 h-28 rounded-full blur-2xl ${
                    project.id === 'project-1'
                      ? 'bg-[#d0bcff]/15'
                      : project.id === 'project-2'
                      ? 'bg-[#4cd7f6]/15'
                      : 'bg-[#c0c1ff]/15'
                  }`}
                ></div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-[#dfe2ef] mb-2.5 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#cbc3d7] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#1c1f29] text-[#dfe2ef] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Inset Action Footer */}
            <div className="flex items-center justify-between pt-3.5 border-t border-white/10 -mx-5 md:-mx-6 -mb-5 md:-mb-6 px-5 md:px-6 py-3.5 bg-[#0a0e17]/50 rounded-b-2xl">
              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#dfe2ef] hover:text-[#4cd7f6] transition-colors inline-flex items-center gap-1"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-[#958ea0] text-xs">•</span>
                <span className="font-mono text-xs text-[#958ea0]">
                  {project.id === 'project-1'
                    ? 'Demo (Staging)'
                    : project.id === 'project-2'
                    ? 'Design Docs'
                    : 'Early Build'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="font-mono text-xs font-semibold text-[#d0bcff] hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
