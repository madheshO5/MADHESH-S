import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onOpenDemo: (projectId: string) => void;
  onOpenConfigure: () => void;
}

export default function Projects({
  projects,
  onOpenDemo,
  onOpenConfigure,
}: ProjectsProps) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#080e1a]" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8ed5ff] mb-2 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-md text-sm sm:text-base leading-relaxed">
            Explore production-ready software solutions and analytical tools built with modern frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Render Active Projects */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="lg:col-span-1 p-8 rounded-3xl bg-[#1a202c] border border-[#38bdf8]/15 flex flex-col justify-between hover:border-[#38bdf8]/50 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div>
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-[#242a36] relative border border-[#38bdf8]/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#161c28] to-[#0e131f] text-[#38bdf8]">
                      <span className="material-symbols-outlined text-4xl mb-2">analytics</span>
                      <span className="font-mono text-xs text-[#94A3B8]">{project.title}</span>
                    </div>
                  )}
                  {project.hasInteractiveDemo && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0e131f]/90 border border-[#38bdf8]/40 text-[#8ed5ff] font-mono text-[11px] flex items-center gap-1 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Interactive Demo
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8ed5ff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#94A3B8] text-sm sm:text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#242a36] text-[#8ed5ff] font-mono text-xs border border-[#38bdf8]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[#3e484f]/20">
                <a
                  href={project.githubUrl || 'https://github.com/madhesh'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8ed5ff] font-mono text-xs font-semibold hover:underline flex items-center gap-1"
                >
                  [ADD GITHUB LINK]
                </a>
                <button
                  onClick={() => onOpenDemo(project.id)}
                  className="text-[#c0c1ff] font-mono text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  [ADD LIVE DEMO LINK]
                </button>
              </div>
            </div>
          ))}

          {/* Empty Project Card 1 */}
          <div className="p-8 rounded-3xl bg-[#1a202c]/50 border border-dashed border-[#3e484f]/40 flex flex-col items-center justify-center text-center hover:border-[#38bdf8]/50 transition-all min-h-[400px]">
            <div className="w-16 h-16 rounded-2xl bg-[#242a36] flex items-center justify-center text-[#87929a] mb-4 group-hover:text-[#8ed5ff]">
              <span className="material-symbols-outlined text-[32px]">add</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Add Your Project</h3>
            <p className="text-[#94A3B8] text-sm mb-6 max-w-xs leading-relaxed">
              Ready to showcase another application, analysis dashboard, or script repository.
            </p>
            <button
              onClick={onOpenConfigure}
              className="px-4 py-2 rounded-xl bg-[#242a36] text-[#8ed5ff] font-mono text-xs hover:bg-[#343946] border border-[#38bdf8]/20 transition-all cursor-pointer shadow-sm"
            >
              Configure Project
            </button>
          </div>

          {/* Empty Project Card 2 */}
          {projects.length < 2 && (
            <div className="p-8 rounded-3xl bg-[#1a202c]/50 border border-dashed border-[#3e484f]/40 flex flex-col items-center justify-center text-center hover:border-[#38bdf8]/50 transition-all min-h-[400px]">
              <div className="w-16 h-16 rounded-2xl bg-[#242a36] flex items-center justify-center text-[#87929a] mb-4">
                <span className="material-symbols-outlined text-[32px]">add</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Add Your Project</h3>
              <p className="text-[#94A3B8] text-sm mb-6 max-w-xs leading-relaxed">
                Highlight data science case studies, open source contributions, or client deliverables.
              </p>
              <button
                onClick={onOpenConfigure}
                className="px-4 py-2 rounded-xl bg-[#242a36] text-[#8ed5ff] font-mono text-xs hover:bg-[#343946] border border-[#38bdf8]/20 transition-all cursor-pointer shadow-sm"
              >
                Configure Project
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
