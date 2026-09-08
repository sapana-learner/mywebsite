import { Music, Video, Sparkles, Mic, Share2 } from 'lucide-react';

export default function BeyondCodeSection() {
  return (
    <section id="beyond-code" className="py-20 md:py-28 px-5 md:px-10 xl:px-20 max-w-[1360px] mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-md bg-[#262a34]/70 border border-white/10 font-mono text-[11px] text-[#4cd7f6] uppercase tracking-wider">
              Multidimensional Expression
            </span>
            <span className="h-px w-12 bg-white/10"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#dfe2ef] tracking-tight">
            Beyond Code
          </h2>
        </div>

        <p className="text-sm text-[#cbc3d7] max-w-md leading-relaxed">
          Technology is one side of the story. Creativity, performance, visual storytelling,
          communication, and personal expression are integral to how I think and construct
          solutions.
        </p>
      </div>

      {/* 3 Geometric Gallery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Creative Card 1: Dance & Performance */}
        <div className="rounded-2xl bg-[#181b25]/70 border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-md hover:bg-[#1c1f29] hover:border-white/20 transition-all duration-300 group">
          <div>
            {/* Geometric Graphic Container */}
            <div className="h-40 rounded-xl bg-[#0a0e17]/85 border border-white/5 p-4 flex flex-col items-center justify-center relative overflow-hidden mb-6 group-hover:border-white/15 transition-all">
              <svg className="w-20 h-20 text-[#4cd7f6]/60 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                <polygon
                  points="50,15 85,85 15,85"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="50" r="20" strokeWidth="1.5" strokeDasharray="2 2" className="text-[#d0bcff] stroke-current" />
                <circle cx="50" cy="50" r="6" fill="currentColor" />
              </svg>
              <span className="font-mono text-[11px] text-[#958ea0] mt-2 tracking-widest uppercase">
                CADENCE &amp; MOVEMENT
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#4cd7f6]/10 flex items-center justify-center text-[#4cd7f6]">
                <Music className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-semibold text-[#dfe2ef]">Dance &amp; Performance</h3>
            </div>

            <p className="text-sm text-[#cbc3d7] leading-relaxed">
              Rhythm, physical discipline, choreography, and expressive stage presence. Dance hones
              spatial awareness, emotional cadence, and the conviction to perform under observation.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[#958ea0] font-mono text-xs flex items-center justify-between">
            <span>Discipline • Timing</span>
            <span className="text-[#4cd7f6] font-medium">Kinetic Focus</span>
          </div>
        </div>

        {/* Creative Card 2: Short-Form Video & Visual Storytelling */}
        <div className="rounded-2xl bg-[#181b25]/70 border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-md hover:bg-[#1c1f29] hover:border-white/20 transition-all duration-300 group">
          <div>
            {/* Geometric Graphic Container */}
            <div className="h-40 rounded-xl bg-[#0a0e17]/85 border border-white/5 p-4 flex flex-col items-center justify-center relative overflow-hidden mb-6 group-hover:border-white/15 transition-all">
              <svg className="w-20 h-20 text-[#d0bcff]/70" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" rx="8" strokeWidth="2" />
                <polygon points="42,38 65,50 42,62" fill="currentColor" opacity="0.8" />
              </svg>
              <span className="font-mono text-[11px] text-[#958ea0] mt-2 tracking-widest uppercase">
                PACING &amp; NARRATIVE
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#d0bcff]/10 flex items-center justify-center text-[#d0bcff]">
                <Video className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-semibold text-[#dfe2ef]">Video &amp; Storytelling</h3>
            </div>

            <p className="text-sm text-[#cbc3d7] leading-relaxed">
              Curating short-form video, reels, and digital narratives. Distilling concepts into
              tightly paced, visually compelling sequences that capture audience attention in seconds.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[#958ea0] font-mono text-xs flex items-center justify-between">
            <span>Editing • Aesthetics</span>
            <span className="text-[#d0bcff] font-medium">Digital Reach</span>
          </div>
        </div>

        {/* Creative Card 3: Personal Branding & Communication */}
        <div className="rounded-2xl bg-[#181b25]/70 border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-md hover:bg-[#1c1f29] hover:border-white/20 transition-all duration-300 group">
          <div>
            {/* Geometric Graphic Container */}
            <div className="h-40 rounded-xl bg-[#0a0e17]/85 border border-white/5 p-4 flex flex-col items-center justify-center relative overflow-hidden mb-6 group-hover:border-white/15 transition-all">
              <svg className="w-20 h-20 text-[#c0c1ff]/70" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="32" strokeWidth="2" />
                <line x1="18" y1="50" x2="82" y2="50" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M50 18 C62 30 62 70 50 82 C38 70 38 30 50 18 Z" strokeWidth="1.5" />
              </svg>
              <span className="font-mono text-[11px] text-[#958ea0] mt-2 tracking-widest uppercase">
                INFLUENCE &amp; REACH
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#c0c1ff]/10 flex items-center justify-center text-[#c0c1ff]">
                <Mic className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-semibold text-[#dfe2ef]">Personal Branding</h3>
            </div>

            <p className="text-sm text-[#cbc3d7] leading-relaxed">
              Connecting with multidisciplinary peers, speaking ideas transparently, and cultivating
              an authentic identity at the crossroads of technology, art, and leadership.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[#958ea0] font-mono text-xs flex items-center justify-between">
            <span>Voice • Synthesis</span>
            <span className="text-[#c0c1ff] font-medium">Clear Articulation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
