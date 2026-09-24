export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full py-12 border-t border-[#38bdf8]/10 bg-[#0e131f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="text-xl font-bold tracking-tight text-[#8ed5ff]">
            MADHESH S
          </span>
          <p className="text-xs text-[#94A3B8]">
            Software Engineer &amp; Data Analyst Portfolio
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={() => scrollTo('home')}
            className="text-xs text-[#bdc8d1] hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="text-xs text-[#bdc8d1] hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="text-xs text-[#bdc8d1] hover:text-white transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="text-xs text-[#bdc8d1] hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('education')}
            className="text-xs text-[#bdc8d1] hover:text-white transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-xs text-[#bdc8d1] hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>

        <p className="text-xs text-[#87929a] font-mono">
          © 2024 Madhesh S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
