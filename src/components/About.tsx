const ABOUT_CARDS = [
  {
    icon: 'school',
    title: 'CS Graduate',
    description:
      "Bachelor's degree in Computer Science with a strong foundation in algorithms, software design, and data structures.",
  },
  {
    icon: 'analytics',
    title: 'Data Analysis',
    description:
      'Extracting meaningful patterns, cleaning raw datasets, and producing interactive dashboards for decision making.',
  },
  {
    icon: 'code',
    title: 'Python Programming',
    description:
      'Building robust scripts, backend automation tools, and predictive models using Pandas, NumPy, and standard libraries.',
  },
  {
    icon: 'storage',
    title: 'SQL Database',
    description:
      'Writing complex queries, joins, and database optimizations for seamless information retrieval and storage.',
  },
  {
    icon: 'dashboard',
    title: 'Power BI',
    description:
      'Designing impactful reports and dynamic data visualizations that communicate key metrics effectively.',
  },
  {
    icon: 'table_view',
    title: 'Advanced Excel',
    description:
      'Leveraging pivot tables, VLOOKUP, macros, and data modeling for rapid reporting and data audits.',
  },
];

export default function About() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#080e1a] relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8ed5ff] mb-2 block">
              Who I Am
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
          </div>
          <p className="text-[#94A3B8] max-w-md text-sm sm:text-base leading-relaxed italic border-l-2 border-[#38bdf8]/30 pl-4">
            "Driven by curiosity and structured thinking, transforming complex datasets into clear, efficient solutions."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_CARDS.map((card, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#1a202c] border border-[#38bdf8]/15 hover:border-[#38bdf8]/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="w-12 h-12 rounded-xl bg-[#8ed5ff]/10 flex items-center justify-center text-[#8ed5ff] mb-6 group-hover:scale-110 group-hover:bg-[#38bdf8]/20 transition-all">
                <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#8ed5ff] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
