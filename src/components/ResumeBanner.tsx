interface ResumeBannerProps {
  onOpenResume: () => void;
}

export default function ResumeBanner({ onOpenResume }: ResumeBannerProps) {
  return (
    <section className="py-16 px-6 lg:px-12 bg-[#161c28]" id="resume">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-[#242a36] border border-[#38bdf8]/15 shadow-xl">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            Interested in working together?
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base">
            Download my resume for a comprehensive overview of my technical skills and experience.
          </p>
        </div>
        <button
          onClick={onOpenResume}
          className="px-8 py-4 rounded-xl bg-[#38bdf8] text-[#001e2c] hover:opacity-90 font-mono text-xs font-semibold transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">download</span>
          Download Resume
        </button>
      </div>
    </section>
  );
}
