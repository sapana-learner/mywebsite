import { LEARNING_TRACKS } from '../data';
import { Network, Terminal, Cpu, Cloud, Layout, Coins } from 'lucide-react';

export default function LearningSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-4 h-4 text-[#4cd7f6]" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-[#d0bcff]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#c0c1ff]" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-[#4cd7f6]" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#d0bcff]" />;
      case 'Coins':
        return <Coins className="w-4 h-4 text-[#c0c1ff]" />;
      default:
        return <Network className="w-4 h-4 text-[#4cd7f6]" />;
    }
  };

  const getBadgeStyle = (accent: string) => {
    switch (accent) {
      case 'secondary':
        return 'bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30';
      case 'primary':
        return 'bg-[#d0bcff]/10 text-[#d0bcff] border border-[#d0bcff]/30';
      case 'tertiary':
        return 'bg-[#c0c1ff]/10 text-[#c0c1ff] border border-[#c0c1ff]/30';
      default:
        return 'bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30';
    }
  };

  return (
    <section id="learning" className="py-20 md:py-28 px-5 md:px-10 xl:px-20 max-w-[1360px] mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-md bg-[#262a34]/70 border border-white/10 font-mono text-[11px] text-[#4cd7f6] uppercase tracking-wider">
              Active Study &amp; Research
            </span>
            <span className="h-px w-12 bg-white/10"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#dfe2ef] tracking-tight">
            What I'm Learning Now
          </h2>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-xs text-[#dfe2ef] bg-[#1c1f29] border border-white/10 px-4 py-2 rounded-xl shadow-sm w-fit">
          <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
          <span>Honest Tracker: Real-Time Development (No False Metrics)</span>
        </div>
      </div>

      {/* 6 Track Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {LEARNING_TRACKS.map((track) => (
          <div
            key={track.id}
            className="rounded-2xl bg-[#181b25]/80 border border-white/10 p-6 flex flex-col justify-between shadow-md hover:bg-[#1c1f29] hover:border-white/20 transition-all duration-300 group"
          >
            <div>
              {/* Card Top Pill & Track ID */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono uppercase font-semibold ${getBadgeStyle(track.accentColor)}`}>
                  {track.tag}
                </span>
                <span className="font-mono text-xs text-[#958ea0] tracking-wider">
                  {track.trackNumber}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#dfe2ef] mb-2.5 group-hover:text-white transition-colors">
                {track.title}
              </h3>

              <p className="text-sm text-[#cbc3d7] leading-relaxed mb-6">
                {track.description}
              </p>
            </div>

            {/* Bottom Inset Banner */}
            <div className="bg-[#0a0e17]/50 border border-white/5 -mx-6 -mb-6 p-4 rounded-b-2xl">
              <div className="flex items-center gap-2 text-[#958ea0] font-mono text-xs">
                {getIcon(track.iconName)}
                <span className="truncate">{track.focusText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
