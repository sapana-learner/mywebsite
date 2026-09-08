import { VISION_PHASES } from '../data';
import { Target, Sparkles, Compass } from 'lucide-react';

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 md:py-28 px-5 md:px-10 xl:px-20 max-w-[1360px] mx-auto w-full">
      <div className="rounded-3xl bg-[#181b25]/85 border border-white/10 p-6 md:p-12 xl:p-16 shadow-2xl relative overflow-hidden">
        {/* Ambient decorative gradient bleed */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d0bcff]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md bg-[#262a34]/70 border border-white/10 font-mono text-[11px] text-[#d0bcff] uppercase tracking-wider">
            Strategic Direction
          </span>
          <span className="h-px w-12 bg-white/10"></span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#dfe2ef] tracking-tight mb-4">
          Where I'm Going
        </h2>

        <p className="text-xl sm:text-2xl text-[#4cd7f6] font-medium mb-6 max-w-3xl leading-relaxed">
          Developing deliberately toward an impactful career combining AI + Technology + Product Building + Entrepreneurship.
        </p>

        <p className="text-base sm:text-lg text-[#cbc3d7] max-w-3xl leading-relaxed mb-12">
          I don't just aspire to be an engineer who receives tasks; I am building the analytical depth
          and business instinct required to envision products from the ground up, lead technological
          directions, and translate mathematical discoveries into tangible human value.
        </p>

        {/* Roadmap Progression Bar (5 Phases) */}
        <div className="pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {VISION_PHASES.map((phase, idx) => {
              const isCurrent = idx === 0;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-[#0a0e17]/80 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:border-white/20 ${
                    isCurrent
                      ? 'border-[#4cd7f6]/50 shadow-[0_0_20px_-5px_rgba(76,215,246,0.2)]'
                      : 'border-white/5'
                  }`}
                >
                  <div>
                    <div
                      className={`font-mono text-xs font-bold mb-1.5 ${
                        phase.accentColor === 'secondary'
                          ? 'text-[#4cd7f6]'
                          : phase.accentColor === 'primary'
                          ? 'text-[#d0bcff]'
                          : 'text-[#c0c1ff]'
                      }`}
                    >
                      {phase.phaseNumber}
                    </div>
                    <h3 className="text-xl font-bold text-[#dfe2ef] mb-2">{phase.title}</h3>
                    <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
                      {phase.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 font-mono text-xs flex items-center gap-1.5">
                    {isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-ping"></span>
                    )}
                    <span className={isCurrent ? 'text-[#4cd7f6] font-semibold' : 'text-[#958ea0]'}>
                      {phase.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
