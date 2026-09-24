import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('+91 98765 43210');
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#0e131f]" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8ed5ff] mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let's Connect
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-md text-sm sm:text-base leading-relaxed">
            Open for freelance projects, full-time positions, and technical consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#161c28] border border-[#38bdf8]/15 flex items-center gap-4 hover:border-[#38bdf8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center text-[#8ed5ff] shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <span className="text-xs font-mono text-[#87929a] block uppercase">Email</span>
                <a
                  href="mailto:madhesh.career@gmail.com"
                  className="text-base text-white font-medium hover:text-[#8ed5ff] transition-colors"
                >
                  madhesh.career@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="p-6 rounded-2xl bg-[#161c28] border border-[#38bdf8]/15 flex items-center gap-4 hover:border-[#38bdf8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center text-[#8ed5ff] shrink-0">
                <span className="material-symbols-outlined">link</span>
              </div>
              <div>
                <span className="text-xs font-mono text-[#87929a] block uppercase">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/madhesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-white font-medium hover:text-[#8ed5ff] transition-colors"
                >
                  linkedin.com/in/madhesh
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="p-6 rounded-2xl bg-[#161c28] border border-[#38bdf8]/15 flex items-center gap-4 hover:border-[#38bdf8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center text-[#8ed5ff] shrink-0">
                <span className="material-symbols-outlined">code</span>
              </div>
              <div>
                <span className="text-xs font-mono text-[#87929a] block uppercase">GitHub</span>
                <a
                  href="https://github.com/madhesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-white font-medium hover:text-[#8ed5ff] transition-colors"
                >
                  github.com/madhesh
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#161c28] border border-[#38bdf8]/15 flex items-center justify-between gap-4 hover:border-[#38bdf8]/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-[#87929a] block uppercase">WhatsApp</span>
                  {isEditingPhone ? (
                    <input
                      type="text"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="px-2 py-1 bg-[#0e131f] border border-[#38bdf8] text-white text-xs rounded font-mono"
                    />
                  ) : (
                    <span className="text-base text-white font-mono font-medium">
                      {whatsappNumber}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setIsEditingPhone(!isEditingPhone)}
                className="text-xs font-mono text-[#8ed5ff] hover:underline"
              >
                {isEditingPhone ? 'Save' : '[ADD WHATSAPP NUMBER]'}
              </button>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#161c28] border border-[#38bdf8]/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span>Thank you! Your inquiry has been sent to Madhesh S. We'll be in touch soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#bdc8d1] mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#bdc8d1] mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#bdc8d1] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#bdc8d1] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your organization, role requirements, or project details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl bg-[#38bdf8] text-[#001e2c] font-semibold font-mono text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
