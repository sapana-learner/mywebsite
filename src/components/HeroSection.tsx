import { ArrowDown, Terminal, Brain, Rocket, Sparkles } from 'lucide-react';
import HeroShader from './HeroShader';
import InteractiveTerminal from './InteractiveTerminal';

export default function HeroSection() {
  return (
    <section className="relative min-h-[880px] flex flex-col justify-center overflow-hidden px-5 md:px-10 xl:px-20 max-w-[1360px] mx-auto w-full py-16 md:py-24">
      {/* Background WebGL Shader */}
      <HeroShader />

      {/* Subtle radial glow behind hero content */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-[#d0bcff]/12 via-[#4cd7f6]/8 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
        {/* Left Hero Column (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          {/* Status Indicator Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181b25]/80 border border-white/10 backdrop-blur-md shadow-sm w-fit max-w-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
            </span>
            <span className="font-mono text-xs text-[#dfe2ef] truncate">
              Currently learning →{' '}
              <span className="text-[#4cd7f6] font-semibold">Advanced Python • DSA • ML • AWS</span>
            </span>
          </div>

          {/* Name & Academic Credential */}
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#dfe2ef]">
                Sapana
              </h1>
              <span className="font-mono text-lg text-[#d0bcff] font-semibold tracking-wide">
                // 01_BUILDER
              </span>
            </div>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#958ea0] font-medium mt-1">
              B.Tech CSE • Artificial Intelligence &amp; Machine Learning
            </p>
          </div>

          {/* Provocative Statement Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ef] tracking-tight leading-tight">
            Building my way into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] via-[#c0c1ff] to-[#4cd7f6]">
              AI, technology
            </span>
            , and entrepreneurship.
          </h2>

          {/* Contextual Supporting Narrative */}
          <p className="text-base sm:text-lg text-[#cbc3d7] max-w-2xl leading-relaxed">
            Computer Science student exploring Artificial Intelligence, Machine Learning, Python,
            software development, cloud computing, and technology-driven ventures. Committed to
            engineering usable products from computational principles.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#a078ff] via-[#6d3bd7] to-[#03b5d3] text-white font-semibold shadow-lg shadow-[#a078ff]/25 hover:shadow-[#a078ff]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1c1f29]/80 border border-white/10 backdrop-blur-md text-[#dfe2ef] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/40 hover:bg-[#262a34] font-medium transition-all duration-200 shadow-sm"
            >
              <span>Let's Connect</span>
              <Terminal className="w-4 h-4 text-[#4cd7f6]" />
            </a>
          </div>

          {/* Ambient Metric Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-3 text-[#958ea0]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#4cd7f6]" />
              <span className="font-mono text-xs text-[#cbc3d7]">Clean Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-[#d0bcff]" />
              <span className="font-mono text-xs text-[#cbc3d7]">Model Intuition</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-[#c0c1ff]" />
              <span className="font-mono text-xs text-[#cbc3d7]">Venture Mindset</span>
            </div>
          </div>
        </div>

        {/* Right Visual Column (5 Cols) */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
