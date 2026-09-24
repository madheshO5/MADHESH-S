import { useState } from 'react';
import { AchievementItem } from '../types';

interface AddAchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: AchievementItem) => void;
}

const PRESET_ACHIEVEMENTS: Omit<AchievementItem, 'id'>[] = [
  {
    title: '1st Prize - Inter-College Data Analytics Hackathon',
    organization: 'District Technical Symposium',
    date: '2024',
    description: 'Developed an automated customer churn predictive pipeline within 24 hours using Python and Streamlit.',
  },
  {
    title: 'Academic Excellence in Database Management',
    organization: 'EGS Pillay Arts & Science College',
    date: '2023',
    description: 'Honored with certificate of academic merit for highest scores in Advanced SQL and Data Structures.',
  },
  {
    title: 'Kaggle Python & Pandas Specialization Silver Rank',
    organization: 'Kaggle Community',
    date: '2023',
    description: 'Completed comprehensive exploratory data analysis notebooks with top 10% community engagement.',
  },
];

export default function AddAchievementModal({ isOpen, onClose, onAdd }: AddAchievementModalProps) {
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      id: `achieve-${Date.now()}`,
      title: title.trim(),
      organization: organization.trim() || 'Academic / Industry',
      date: date.trim() || '2024',
      description: description.trim() || 'Awarded for technical and analytical dedication.',
    });
    onClose();
  };

  const handlePickPreset = (item: typeof PRESET_ACHIEVEMENTS[0]) => {
    onAdd({
      ...item,
      id: `achieve-${Date.now()}`,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#161c28] border border-[#38bdf8]/30 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#3e484f]/40 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#8ed5ff]">
              <span className="material-symbols-outlined">military_tech</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Add Achievement</h3>
              <p className="text-xs text-[#94A3B8]">Hackathons, competitions, or academic awards</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#242a36] text-[#bdc8d1] hover:text-white hover:bg-[#343946] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Quick Add Presets */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#8ed5ff] mb-2">
            Suggested Milestone Presets:
          </label>
          <div className="space-y-2">
            {PRESET_ACHIEVEMENTS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePickPreset(item)}
                className="w-full text-left p-3 rounded-xl bg-[#1a202c] hover:bg-[#242a36] border border-[#38bdf8]/15 text-xs transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="font-semibold text-white group-hover:text-[#8ed5ff]">{item.title}</div>
                  <div className="text-[#87929a] mt-0.5">{item.organization} · {item.date}</div>
                </div>
                <span className="text-[#38bdf8] flex items-center gap-1 font-mono">
                  + Add
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#3e484f]/40"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase font-mono">
            <span className="bg-[#161c28] px-2 text-[#87929a]">Or Custom Achievement</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Achievement Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Winner - CodeSprint Python Competition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Organization / Event</label>
              <input
                type="text"
                placeholder="e.g. State University / IEEE"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Year</label>
              <input
                type="text"
                placeholder="e.g. 2024"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Details / Description</label>
            <textarea
              rows={2}
              placeholder="Brief description of the challenge, solution, and recognition..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
            />
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
              Save Achievement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
