import { useState } from 'react';
import { Project } from '../types';
import { SUGGESTED_PROJECTS } from '../data/portfolioData';

interface ConfigureProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

export default function ConfigureProjectModal({
  isOpen,
  onClose,
  onAddProject,
}: ConfigureProjectModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('Python, SQL, Pandas');
  const [githubUrl, setGithubUrl] = useState('https://github.com/madhesh');
  const [liveDemoUrl, setLiveDemoUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: title.trim(),
      description: description.trim() || 'A data analytics solution engineered for business performance insights.',
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      githubUrl: githubUrl.trim() || undefined,
      liveDemoUrl: liveDemoUrl.trim() || undefined,
      hasInteractiveDemo: false,
    };

    onAddProject(newProject);
    onClose();
  };

  const handlePickSuggested = (suggested: typeof SUGGESTED_PROJECTS[0]) => {
    const newProject: Project = {
      ...suggested,
      id: `proj-${Date.now()}`,
    };
    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#161c28] border border-[#38bdf8]/30 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#3e484f]/40 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#8ed5ff]">
              <span className="material-symbols-outlined">add_box</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Configure New Project</h3>
              <p className="text-xs text-[#94A3B8]">Showcase your data analysis, script, or software project</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#242a36] text-[#bdc8d1] hover:text-white hover:bg-[#343946] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Quick Suggestion Templates */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#8ed5ff] mb-2">
            Quick Add Pre-built Data Projects:
          </label>
          <div className="space-y-2">
            {SUGGESTED_PROJECTS.map((sugg, i) => (
              <div
                key={i}
                onClick={() => handlePickSuggested(sugg)}
                className="p-3 rounded-xl bg-[#1a202c] hover:bg-[#242a36] border border-[#38bdf8]/15 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#8ed5ff] transition-colors">
                    {sugg.title}
                  </h4>
                  <div className="flex gap-2 text-xs text-[#94A3B8] mt-1 font-mono">
                    {sugg.tags.slice(0, 3).join(' · ')}
                  </div>
                </div>
                <span className="text-xs text-[#38bdf8] flex items-center gap-1">
                  Add <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#3e484f]/40"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase font-mono">
            <span className="bg-[#161c28] px-2 text-[#87929a]">Or Custom Project</span>
          </div>
        </div>

        {/* Custom Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Project Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Real-Time Crypto Liquidity Tracker"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Description *</label>
            <textarea
              rows={3}
              required
              placeholder="Summary of business challenge, technical approach, algorithms, and results..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Technologies (comma separated)</label>
            <input
              type="text"
              placeholder="Python, Power BI, SQL, Pandas, NumPy"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">GitHub Repository URL</label>
              <input
                type="url"
                placeholder="https://github.com/..."
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Live Demo / Dashboard URL</label>
              <input
                type="text"
                placeholder="https://app.powerbi.com/... or link"
                value={liveDemoUrl}
                onChange={(e) => setLiveDemoUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>
          </div>

          <div className="pt-3 flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#242a36] text-white hover:bg-[#343946] text-xs font-mono transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#38bdf8] text-[#001e2c] font-semibold text-xs font-mono hover:opacity-90 transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)]"
            >
              Add to Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
