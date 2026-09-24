import { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ onOpenResume }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e131f]/85 backdrop-blur-xl border-b border-[#38bdf8]/10 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="text-2xl font-bold tracking-tight text-[#8ed5ff] hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          MADHESH S
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                className={`transition-all ${
                  isActive
                    ? 'bg-[#38bdf8] text-[#004965] font-bold rounded-lg px-3 py-1.5 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                    : 'text-sm text-[#bdc8d1] hover:text-[#dde2f3] px-2 py-1'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#38bdf8] text-[#004965] hover:opacity-95 font-mono text-xs font-semibold transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download Resume
          </button>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('about');
            }}
            title="Madhesh S - Profile"
            className="w-8 h-8 rounded-full bg-[#8ed5ff] flex items-center justify-center text-[#00354a] hover:ring-2 hover:ring-[#38bdf8] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#dde2f3] hover:text-[#8ed5ff] p-2 rounded-lg bg-[#1a202c] border border-[#3e484f]/30"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e131f] border-b border-[#38bdf8]/20 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#38bdf8] text-[#004965] font-bold'
                    : 'text-[#bdc8d1] hover:bg-[#1a202c] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-[#3e484f]/40 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 rounded-xl bg-[#38bdf8] text-[#004965] font-semibold text-xs font-mono flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
