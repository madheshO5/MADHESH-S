interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[921px] flex items-center justify-center px-6 lg:px-12 py-20 overflow-hidden"
      id="home"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8ed5ff]/10 via-transparent to-[#c0c1ff]/10 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Intro & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242a36] border border-[#38bdf8]/20 text-[#8ed5ff] font-mono text-xs mb-6 shadow-sm">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>Data Analyst &amp; Python Developer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Hi, I'm <span className="text-[#8ed5ff]">Madhesh S</span>
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mb-8 leading-relaxed">
            Computer Science graduate passionate about data analysis, Python, SQL, Power BI, and building practical technology solutions that transform raw data into actionable business insights.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-xl bg-[#38bdf8] text-[#001e2c] font-mono text-xs font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Contact Me
            </button>

            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-xl bg-[#242a36] border border-[#38bdf8]/15 text-[#dde2f3] font-mono text-xs font-medium hover:bg-[#343946] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              View Projects
            </button>

            <button
              onClick={onOpenResume}
              className="px-6 py-3 rounded-xl bg-[#242a36] border border-[#38bdf8]/20 text-[#8ed5ff] font-mono text-xs font-medium hover:bg-[#343946] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download Resume
            </button>
          </div>

          {/* Connect Links */}
          <div className="flex items-center gap-4 text-[#bdc8d1]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#87929a]">Connect:</span>
            <a
              href="https://linkedin.com/in/madhesh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#242a36] border border-[#38bdf8]/15 flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:border-[#38bdf8]/40 hover:bg-[#1a202c] transition-all shadow-sm"
              title="LinkedIn"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a
              href="https://github.com/madhesh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#242a36] border border-[#38bdf8]/15 flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:border-[#38bdf8]/40 hover:bg-[#1a202c] transition-all shadow-sm"
              title="GitHub"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a
              href="mailto:madhesh.career@gmail.com"
              className="w-10 h-10 rounded-full bg-[#242a36] border border-[#38bdf8]/15 flex items-center justify-center text-[#bdc8d1] hover:text-[#8ed5ff] hover:border-[#38bdf8]/40 hover:bg-[#1a202c] transition-all shadow-sm"
              title="Email Madhesh S"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile & Floating Badges */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-6">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full bg-gradient-to-tr from-[#8ed5ff]/20 to-[#c0c1ff]/20 flex items-center justify-center p-4 border border-[#38bdf8]/20 shadow-[0_0_50px_rgba(56,189,248,0.15)]">
            {/* Dashed spinning border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#8ed5ff]/35 animate-spin-slow pointer-events-none" />

            {/* Avatar circle */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#242a36] border border-[#38bdf8]/20 relative flex items-center justify-center shadow-inner">
              <img
                src="/madhesh-photo.jpg"
                alt="Madhesh S - Data Analyst & Python Developer"
                className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Badges */}
            {/* Python Badge */}
            <div className="absolute -top-2 left-4 px-4 py-2 rounded-xl bg-[#0f172a]/90 border border-[#38bdf8]/25 backdrop-blur-md shadow-xl flex items-center gap-2 font-mono text-xs text-[#8ed5ff] transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span className="font-semibold">Python</span>
            </div>

            {/* SQL Badge */}
            <div className="absolute top-1/2 -right-6 px-4 py-2 rounded-xl bg-[#0f172a]/90 border border-[#ffc176]/25 backdrop-blur-md shadow-xl flex items-center gap-2 font-mono text-xs text-[#ffc176] transition-transform hover:translate-x-1">
              <span className="material-symbols-outlined text-[16px]">database</span>
              <span className="font-semibold">SQL</span>
            </div>

            {/* Power BI Badge */}
            <div className="absolute -bottom-2 left-10 px-4 py-2 rounded-xl bg-[#0f172a]/90 border border-[#c0c1ff]/25 backdrop-blur-md shadow-xl flex items-center gap-2 font-mono text-xs text-[#c0c1ff] transition-transform hover:translate-y-1">
              <span className="material-symbols-outlined text-[16px]">bar_chart</span>
              <span className="font-semibold">Power BI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
