import { GraduationCap, Brain, Lightbulb, Compass, Compass as ExploreIcon, Boxes, Network, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const identityCards = [
    {
      title: 'B.Tech CSE',
      subtitle: 'AI & ML Focus',
      icon: GraduationCap,
      color: 'text-[#4cd7f6]',
      bg: 'bg-[#4cd7f6]/10',
    },
    {
      title: 'Problem Solver',
      subtitle: 'First Principles',
      icon: Brain,
      color: 'text-[#d0bcff]',
      bg: 'bg-[#d0bcff]/10',
    },
    {
      title: 'Tech Enthusiast',
      subtitle: 'Next-Gen Systems',
      icon: Lightbulb,
      color: 'text-[#c0c1ff]',
      bg: 'bg-[#c0c1ff]/10',
    },
    {
      title: 'Future Builder',
      subtitle: 'Venture Driven',
      icon: Compass,
      color: 'text-[#4cd7f6]',
      bg: 'bg-[#4cd7f6]/10',
    },
  ];

  const pillars = [
    {
      number: '01 // DISCOVERY',
      title: 'Self-Directed Exploration',
      description:
        'Consistently deep-diving into unfamiliar systems, emerging model architectures, and modern engineering paradigms beyond the boundaries of standard coursework.',
      color: 'text-[#d0bcff]',
      badgeColor: 'text-[#d0bcff]',
      icon: ExploreIcon,
    },
    {
      number: '02 // TRANSLATION',
      title: 'AI & Product Building',
      description:
        'Translating theoretical algorithms into usable, tangible software artifacts. Striving to bridge deep backend intelligence with clean interface intuition.',
      color: 'text-[#4cd7f6]',
      badgeColor: 'text-[#4cd7f6]',
      icon: Boxes,
    },
    {
      number: '03 // VALUE CREATION',
      title: 'Entrepreneurial Mindset',
      description:
        'Viewing computational systems through the lens of utility, economics, and real-world impact. Inspired by how scalable software transforms modern commerce and society.',
      color: 'text-[#c0c1ff]',
      badgeColor: 'text-[#c0c1ff]',
      icon: Network,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-10 xl:px-20 max-w-[1360px] mx-auto w-full">
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="px-3 py-1 rounded-md bg-[#262a34]/70 border border-white/10 font-mono text-[11px] text-[#4cd7f6] uppercase tracking-wider">
          About Me
        </span>
        <span className="h-px w-12 bg-white/10"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12">
        {/* Core Story & Narrative (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ef] tracking-tight leading-snug">
            Not just writing code — <span className="text-[#d0bcff]">engineering solutions</span> and
            building future-proof technology.
          </h2>

          <p className="text-base sm:text-lg text-[#cbc3d7] leading-relaxed">
            I am a Computer Science &amp; Engineering undergraduate driven by the immense potential
            of Artificial Intelligence, Machine Learning, software systems, and entrepreneurial
            product design. For me, computer science is not an abstract academic track — it is a
            canvas for building scalable, purposeful artifacts that solve real human friction.
          </p>

          <div className="text-sm sm:text-base text-[#dfe2ef] leading-relaxed bg-[#181b25]/70 border border-white/10 p-5 rounded-2xl shadow-sm">
            <span className="font-semibold text-[#4cd7f6]">The Approach:</span> I treat continuous,
            self-directed learning as my highest-leverage competitive edge. When faced with complex
            algorithms or unfamiliar frameworks, I break them down to first principles, debug
            deliberately, and leverage modern AI tools not as a crutch, but as high-velocity
            productivity amplifiers to accelerate deep conceptual synthesis.
          </div>

          {/* Compact Identity Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {identityCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#1c1f29]/70 border border-white/5 hover:border-white/15 transition-all duration-200 shadow-sm group"
                >
                  <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-4 h-4 ${card.color}`} />
                  </div>
                  <div className="font-mono text-xs font-semibold text-[#dfe2ef]">{card.title}</div>
                  <div className="font-mono text-[11px] text-[#958ea0] mt-0.5">{card.subtitle}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Pillars Cards (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-5 md:p-6 rounded-2xl bg-[#181b25]/70 border border-white/10 hover:border-white/20 hover:bg-[#1c1f29]/80 transition-all duration-300 shadow-md group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold tracking-wider ${pillar.color}`}>
                    {pillar.number}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-[#958ea0] group-hover:text-[#dfe2ef] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#dfe2ef] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#cbc3d7] leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
