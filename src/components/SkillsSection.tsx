import { useState } from 'react';
import { Code, BrainCircuit, Palette, TrendingUp, Search } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-[#4cd7f6]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#d0bcff]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#c0c1ff]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#4cd7f6]" />;
      default:
        return <Code className="w-5 h-5 text-[#4cd7f6]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 px-5 md:px-10 xl:px-20 max-w-[1360px] mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-md bg-[#262a34]/70 border border-white/10 font-mono text-[11px] text-[#d0bcff] uppercase tracking-wider">
              Competencies &amp; Toolkit
            </span>
            <span className="h-px w-12 bg-white/10"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#dfe2ef] tracking-tight">
            Capabilities &amp; Growth Vectors
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-sm text-[#958ea0] max-w-md leading-relaxed">
            Clear categorization distinguishing active competencies from areas of focused, deliberate real-time expansion.
          </p>
          {/* Quick Skill Search */}
          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#958ea0]" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#181b25] border border-white/10 text-xs font-mono text-[#dfe2ef] placeholder:text-[#958ea0]/70 focus:outline-none focus:border-[#4cd7f6]"
            />
          </div>
        </div>
      </div>

      {/* 4 Structured Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const query = searchQuery.toLowerCase().trim();
          const matchesQuery = (skill: string) => !query || skill.toLowerCase().includes(query);

          const filteredSkills = cat.skills.filter(matchesQuery);
          const filteredDeepening = cat.deepeningSkills ? cat.deepeningSkills.filter(matchesQuery) : [];

          const isMuted = query && filteredSkills.length === 0 && filteredDeepening.length === 0;

          return (
            <div
              key={idx}
              className={`rounded-2xl bg-[#181b25]/70 border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-md transition-all duration-300 hover:border-white/20 hover:bg-[#1c1f29]/80 ${
                isMuted ? 'opacity-40 grayscale' : 'opacity-100'
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 -mx-6 md:-mx-8 -mt-6 md:-mt-8 px-6 md:px-8 pt-5 bg-[#0a0e17]/50 rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    {getIcon(cat.iconName)}
                    <h3 className="text-xl font-semibold text-[#dfe2ef]">{cat.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-[#958ea0] uppercase font-medium tracking-wider">
                    {cat.subtitle}
                  </span>
                </div>

                {cat.description && (
                  <p className="text-sm text-[#cbc3d7] mb-5 leading-relaxed">
                    {cat.description}
                  </p>
                )}

                {/* Active Skills Tags */}
                <div className="space-y-4">
                  <div>
                    {cat.deepeningSkills && (
                      <span className="font-mono text-[11px] text-[#958ea0] block mb-2.5 font-medium uppercase tracking-wider">
                        Current Strengths
                      </span>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => {
                        const isMatch = query && skill.toLowerCase().includes(query);
                        return (
                          <span
                            key={sIdx}
                            className={`px-3 py-1 rounded-md font-mono text-xs border transition-colors shadow-sm ${
                              isMatch
                                ? 'bg-[#4cd7f6]/20 text-[#4cd7f6] border-[#4cd7f6]'
                                : 'bg-[#1c1f29] text-[#dfe2ef] border-white/5 hover:border-white/20 hover:bg-[#262a34]'
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Currently Deepening */}
                  {cat.deepeningSkills && cat.deepeningSkills.length > 0 && (
                    <div className="pt-2">
                      <span className="font-mono text-[11px] text-[#4cd7f6] mb-2 font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                        Currently Deepening
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.deepeningSkills.map((deepSkill, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-3 py-1.5 rounded-md bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 text-[#4cd7f6] font-mono text-xs font-semibold shadow-sm"
                          >
                            {deepSkill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[#958ea0] font-mono text-xs flex items-center justify-between">
                <span>{cat.footerNote}</span>
                <span className={cat.accentColor === 'secondary' ? 'text-[#4cd7f6] font-medium' : cat.accentColor === 'primary' ? 'text-[#d0bcff] font-medium' : 'text-[#c0c1ff] font-medium'}>
                  {cat.statusBadge}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
