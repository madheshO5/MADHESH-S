interface ExperienceProps {
  onOpenContact: () => void;
}

export default function Experience({ onOpenContact }: ExperienceProps) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#0e131f]" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8ed5ff] mb-2 block">
              Career Path
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Experience &amp; Internships
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-md text-sm sm:text-base leading-relaxed">
            Practical experience applying technical problem-solving to real-world business and data workflows.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#161c28] border border-[#38bdf8]/20 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e131f] border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>OPEN TO OPPORTUNITIES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              Actively searching for Data Analyst, Data Entry Specialist, and Python Developer roles where I can contribute technical expertise and analytical rigor.
            </h3>

            <p className="text-[#94A3B8] text-sm sm:text-base mb-8">
              Available for Full-time &amp; Contract Positions · Remote &amp; On-Site
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#3e484f]/30">
              <div className="p-4 rounded-xl bg-[#0e131f]/70 border border-[#38bdf8]/10">
                <span className="text-xs font-mono text-[#8ed5ff] block mb-1">Target Role 01</span>
                <span className="text-sm font-semibold text-white">Data Analyst / BI</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0e131f]/70 border border-[#38bdf8]/10">
                <span className="text-xs font-mono text-[#8ed5ff] block mb-1">Target Role 02</span>
                <span className="text-sm font-semibold text-white">Python Software Developer</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0e131f]/70 border border-[#38bdf8]/10">
                <span className="text-xs font-mono text-[#8ed5ff] block mb-1">Target Role 03</span>
                <span className="text-sm font-semibold text-white">Database &amp; Data Entry Specialist</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-xl bg-[#38bdf8] text-[#001e2c] font-mono text-xs font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">handshake</span>
                Discuss Job Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
