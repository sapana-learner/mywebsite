import { useState, FormEvent } from 'react';
import { Mail, Code, Linkedin, Copy, Check, Send, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const email = 'contact@sapana.ai';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitMessage = (e: FormEvent) => {

    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowMessageForm(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-10 xl:px-20 max-w-[1360px] mx-auto w-full">
      <div className="rounded-3xl bg-gradient-to-b from-[#181b25]/90 to-[#0a0e17] border border-white/10 p-6 md:p-14 xl:p-20 shadow-2xl relative overflow-hidden">
        {/* Lighting Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-[#4cd7f6]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1f29] border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping"></span>
            <span className="font-mono text-xs text-[#dfe2ef] uppercase tracking-wider">
              COLLABORATION INVITATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#dfe2ef] tracking-tight leading-tight">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd7f6] via-[#d0bcff] to-[#c0c1ff]">
              interesting.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#cbc3d7] leading-relaxed max-w-2xl">
            Open to learning opportunities, team hackathons, early-stage product collaborations, and
            connecting with builders working at the intersection of technology and innovation.
          </p>

          {/* Social Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 w-full">
            {/* Email Button */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#a078ff] to-[#6d3bd7] text-white font-semibold shadow-lg shadow-[#a078ff]/25 hover:shadow-[#a078ff]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1c1f29]/80 border border-white/10 backdrop-blur-md text-[#dfe2ef] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/40 hover:bg-[#262a34] font-medium transition-all duration-200 text-sm sm:text-base shadow-sm"
            >
              <Code className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1c1f29]/80 border border-white/10 backdrop-blur-md text-[#dfe2ef] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/40 hover:bg-[#262a34] font-medium transition-all duration-200 text-sm sm:text-base shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Copyable Micro Terminal Box */}
          <div className="mt-4 w-full max-w-md p-3 rounded-xl bg-[#0a0e17]/85 border border-white/10 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 text-left overflow-hidden">
              <span className="font-mono text-sm text-[#4cd7f6] font-bold select-none">&gt;</span>
              <span className="font-mono text-xs sm:text-sm text-[#cbc3d7] truncate">{email}</span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="font-mono text-xs text-[#cbc3d7] hover:text-[#4cd7f6] px-3 py-1.5 rounded-lg bg-[#1c1f29] hover:bg-[#262a34] border border-white/5 transition-all inline-flex items-center gap-1.5 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span className="text-[#4cd7f6]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Optional Quick Message Dropdown Toggle */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowMessageForm(!showMessageForm)}
              className="text-xs font-mono text-[#958ea0] hover:text-[#d0bcff] underline decoration-dotted transition-colors"
            >
              {showMessageForm ? 'Close direct message form' : 'Or send a quick message directly →'}
            </button>
          </div>

          {showMessageForm && (
            <div className="w-full max-w-lg mt-2 p-6 rounded-2xl bg-[#0a0e17] border border-white/10 text-left animate-in fade-in duration-200">
              {formSent ? (
                <div className="text-center py-6">
                  <div className="w-10 h-10 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#dfe2ef]">Message Dispatched</h4>
                  <p className="text-xs text-[#958ea0] font-mono mt-1">
                    Thank you for reaching out! Sapana will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitMessage} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs text-[#958ea0] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#181b25] border border-white/10 text-sm text-[#dfe2ef] focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#958ea0] mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@startup.io"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#181b25] border border-white/10 text-sm text-[#dfe2ef] focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#958ea0] mb-1">Project or Inquiry</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Brief note on collaboration, hackathon, or technology idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#181b25] border border-white/10 text-sm text-[#dfe2ef] focus:outline-none focus:border-[#4cd7f6]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#4cd7f6] to-[#03b5d3] text-[#003640] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Transmission
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
