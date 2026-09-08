import { useState } from 'react';
import { Play, Sparkles, CheckCircle2 } from 'lucide-react';

export default function InteractiveTerminal() {
  const [activations, setActivations] = useState<number[]>([
    0.24, 0.58, 0.42, 0.19, 0.88, 0.65, 0.72, 0.12,
    0.48, 0.31, 0.94, 0.38, 0.28, 0.64, 0.79, 0.22,
    0.51, 0.82, 0.33, 0.67, 0.15, 0.91, 0.44, 0.76,
    0.39, 0.61, 0.84, 0.29, 0.73, 0.46, 0.89, 0.35,
  ]);
  const [hoveredCell, setHoveredCell] = useState<{ idx: number; val: number } | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [stepCount, setStepCount] = useState(1024);

  const simulateForwardPass = () => {
    setIsSimulating(true);
    const newActivations = activations.map(() => Number((Math.random() * 0.9 + 0.1).toFixed(2)));
    setTimeout(() => {
      setActivations(newActivations);
      setStepCount((prev) => prev + 16);
      setIsSimulating(false);
    }, 250);
  };

  const getColorClass = (val: number) => {
    if (val > 0.75) return 'bg-[#d0bcff] text-[#0a0e17] shadow-[0_0_10px_rgba(208,188,255,0.4)]';
    if (val > 0.5) return 'bg-[#4cd7f6]/80 text-[#0a0e17]';
    if (val > 0.3) return 'bg-[#a078ff]/40 text-white';
    return 'bg-[#181b25] border border-white/5 text-gray-400';
  };

  return (
    <div className="relative rounded-2xl bg-[#181b25]/85 backdrop-blur-xl border border-white/10 p-4 md:p-6 shadow-2xl transition-all duration-300 hover:border-white/20">
      {/* Terminal Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 -mx-4 md:-mx-6 -mt-4 md:-mt-6 px-4 md:px-6 pt-4 bg-[#0a0e17]/60 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ffb4ab] inline-block shadow-sm"></span>
          <span className="w-3 h-3 rounded-full bg-[#4cd7f6] inline-block shadow-sm"></span>
          <span className="w-3 h-3 rounded-full bg-[#d0bcff] inline-block shadow-sm"></span>
          <span className="ml-2 font-mono text-xs text-[#958ea0]">session_agent.py</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-[#4cd7f6] uppercase tracking-wider px-2 py-0.5 rounded bg-[#262a34]/80 border border-[#4cd7f6]/30">
            LIVE STATE
          </span>
        </div>
      </div>

      {/* Interactive Neural Visualizer Mini Matrix */}
      <div className="p-3.5 rounded-xl bg-[#0a0e17]/80 border border-white/5 mb-4">
        <div className="flex justify-between items-center mb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#dfe2ef]">NEURAL ACTIVATION MAP</span>
            <button
              onClick={simulateForwardPass}
              disabled={isSimulating}
              className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#4cd7f6]/10 text-[#4cd7f6] hover:bg-[#4cd7f6]/20 transition-colors border border-[#4cd7f6]/30"
              title="Click to simulate neural forward propagation"
            >
              <Play className={`w-2.5 h-2.5 ${isSimulating ? 'animate-spin' : ''}`} />
              Forward Pass
            </button>
          </div>
          <span className="font-mono text-xs text-[#d0bcff]">
            TENSOR: [4 × 128]
          </span>
        </div>

        {/* 4x8 visual grid */}
        <div className="grid grid-cols-8 gap-1.5 py-1">
          {activations.map((val, idx) => (
            <button
              key={idx}
              type="button"
              onMouseEnter={() => setHoveredCell({ idx, val })}
              onMouseLeave={() => setHoveredCell(null)}
              onClick={() => {
                const next = [...activations];
                next[idx] = Number(((val + 0.3) % 1).toFixed(2));
                setActivations(next);
              }}
              className={`h-6 rounded cursor-pointer transition-all duration-200 transform hover:scale-110 active:scale-95 flex items-center justify-center font-mono text-[9px] font-bold select-none ${getColorClass(
                val
              )}`}
            >
              {hoveredCell?.idx === idx ? val.toFixed(1) : ''}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-2 pt-1 border-t border-white/5 font-mono text-[10px] text-[#958ea0]">
          <span>Layer: Hidden_3 (Dense)</span>
          <span>
            {hoveredCell ? (
              <span className="text-[#4cd7f6]">Node #{hoveredCell.idx}: Act={hoveredCell.val}</span>
            ) : (
              <span>Step: #{stepCount}</span>
            )}
          </span>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="font-mono text-xs space-y-1 leading-relaxed bg-[#0a0e17]/70 p-3.5 rounded-xl border border-white/5">
        <p className="text-[#958ea0]">
          <span className="text-[#c0c1ff]">import</span> torch
        </p>
        <p className="text-[#958ea0]">
          <span className="text-[#c0c1ff]">from</span> dataclasses <span className="text-[#c0c1ff]">import</span> dataclass
        </p>
        <p className="text-[#dfe2ef] mt-2">
          <span className="text-[#4cd7f6]">@dataclass</span>
        </p>
        <p className="text-[#dfe2ef]">
          <span className="text-[#d0bcff]">class</span> <span className="text-[#4cd7f6] font-bold">SapanaModelEngine</span>:
        </p>
        <p className="text-[#dfe2ef] pl-4">
          focus: <span className="text-[#d0bcff]">"AI / ML Systems & Products"</span>
        </p>
        <p className="text-[#dfe2ef] pl-4">
          discipline: <span className="text-[#d0bcff]">"B.Tech CSE (AI & ML)"</span>
        </p>
        <p className="text-[#dfe2ef] pl-4">
          velocity: <span className="text-[#4cd7f6]">float("inf")</span>
        </p>
        <p className="text-[#dfe2ef] pl-4 mt-1">
          status: <span className="text-[#c0c1ff]">"Building & Compounding Daily"</span>
        </p>
      </div>

      {/* System Status Bar */}
      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[#958ea0] font-mono text-xs">
        <span className="flex items-center gap-1.5 text-xs text-[#dfe2ef]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
          </span>
          sys_check: OK
        </span>
        <span className="text-[11px] text-[#958ea0]">UTF-8 // PyTorch 2.3 Ready</span>
      </div>
    </div>
  );
}
