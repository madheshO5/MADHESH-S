import { AchievementItem } from '../types';

interface AchievementsProps {
  achievements: AchievementItem[];
  onOpenAddModal: () => void;
  onRemoveAchievement: (id: string) => void;
}

export default function Achievements({
  achievements,
  onOpenAddModal,
  onRemoveAchievement,
}: AchievementsProps) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#080e1a]" id="achievements">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8ed5ff] mb-2 block">
              Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Achievements
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-md text-sm sm:text-base leading-relaxed">
            Key honors, competition recognitions, and personal accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Active Achievements */}
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#1a202c] border border-[#38bdf8]/15 hover:border-[#38bdf8]/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ffc176]/10 flex items-center justify-center text-[#ffc176] group-hover:bg-[#ffc176]/20 transition-all">
                    <span className="material-symbols-outlined text-[24px]">military_tech</span>
                  </div>
                  <span className="font-mono text-xs text-[#87929a]">{item.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#8ed5ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#ffc176] font-mono text-xs mb-3">{item.organization}</p>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#3e484f]/20 flex justify-end">
                <button
                  onClick={() => onRemoveAchievement(item.id)}
                  className="text-rose-400 hover:text-rose-300 opacity-60 hover:opacity-100 transition-opacity"
                  title="Remove"
                >
                  <span className="material-symbols-outlined text-[16px]">delete</span>
                </button>
              </div>
            </div>
          ))}

          {/* Add Your Achievements Card */}
          <div className="p-8 rounded-2xl bg-[#1a202c]/40 border border-dashed border-[#3e484f]/40 flex flex-col items-center justify-center text-center hover:border-[#38bdf8]/50 transition-all min-h-[260px]">
            <div className="w-16 h-16 rounded-2xl bg-[#242a36] flex items-center justify-center text-[#87929a] mb-4">
              <span className="material-symbols-outlined text-[32px]">add</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Add Your Achievements</h3>
            <p className="text-[#94A3B8] text-xs sm:text-sm mb-6 max-w-xs leading-relaxed">
              Feature hackathon placements, academic honors, or notable coding milestones.
            </p>
            <button
              onClick={onOpenAddModal}
              className="px-4 py-2 rounded-xl bg-[#242a36] text-[#8ed5ff] font-mono text-xs hover:bg-[#343946] border border-[#38bdf8]/20 transition-all cursor-pointer shadow-sm"
            >
              Add Achievement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
