import { useState, useEffect } from 'react';
import { Search, Terminal, ArrowRight, Copy, Check, ExternalLink, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // open command palette
          const event = new CustomEvent('open-command-palette');
          window.dispatchEvent(event);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Jump to About Section', href: '#about', category: 'Navigation' },
    { label: 'Jump to Capabilities & Skills', href: '#skills', category: 'Navigation' },
    { label: 'Jump to Real-Time Learning Tracker', href: '#learning', category: 'Navigation' },
    { label: 'Jump to Projects & Prototypes', href: '#projects', category: 'Navigation' },
    { label: 'Jump to Strategic Vision', href: '#vision', category: 'Navigation' },
    { label: 'Jump to Beyond Code & Expression', href: '#beyond-code', category: 'Navigation' },
    { label: 'Jump to Collaboration & Contact', href: '#contact', category: 'Navigation' },
    {
      label: 'Copy Contact Email (contact@sapana.ai)',
      action: () => {
        navigator.clipboard.writeText('contact@sapana.ai');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      category: 'Actions',
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-[#181b25] border border-white/15 shadow-2xl overflow-hidden text-[#dfe2ef]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#0a0e17]/80">
          <Terminal className="w-4 h-4 text-[#4cd7f6] mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-mono text-[#dfe2ef] placeholder:text-[#958ea0] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#958ea0] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="p-4 text-center font-mono text-xs text-[#958ea0]">
              No commands matching "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (item.action) {
                    item.action();
                  } else if (item.href) {
                    window.location.href = item.href;
                    onClose();
                  }
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left hover:bg-[#262a34] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-[#958ea0] group-hover:text-[#4cd7f6] transition-colors">
                    &gt;
                  </span>
                  <span className="text-sm font-medium text-[#dfe2ef]">{item.label}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#958ea0] uppercase tracking-wider bg-[#1c1f29] px-2 py-0.5 rounded border border-white/5">
                    {item.category}
                  </span>
                  {item.action && copied ? (
                    <Check className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-[#958ea0] opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#0a0e17] border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-[#958ea0]">
          <span>Use ESC to exit</span>
          <span>Press ⌘K anytime</span>
        </div>
      </div>
    </div>
  );
}
