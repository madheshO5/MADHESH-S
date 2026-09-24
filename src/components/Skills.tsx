import { useState } from 'react';
import { SkillItem } from '../types';

interface SkillsProps {
  skills: SkillItem[];
}

export default function Skills({ skills }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'programming' | 'database' | 'analytics' | 'tools'>('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#0e131f]" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8ed5ff] mb-2 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Core technologies and tools I utilize for software engineering and data analytics.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {(
            [
              { id: 'all', label: 'All Capabilities' },
              { id: 'programming', label: 'Languages' },
              { id: 'database', label: 'Databases' },
              { id: 'analytics', label: 'Data & BI' },
              { id: 'tools', label: 'Tools & Office' },
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#38bdf8] text-[#001e2c] font-semibold shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                  : 'bg-[#161c28] text-[#bdc8d1] hover:bg-[#242a36] hover:text-white border border-[#38bdf8]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-[#161c28] border border-[#38bdf8]/15 hover:border-[#38bdf8]/40 transition-all duration-300 flex items-center justify-between group shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center text-[#8ed5ff] group-hover:scale-105 group-hover:bg-[#38bdf8]/20 transition-all">
                  <span className="material-symbols-outlined text-[24px]">{skill.icon}</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg text-white font-semibold group-hover:text-[#8ed5ff] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-xs text-[#87929a]">{skill.levelName}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="flex flex-col items-end gap-1.5">
                <span className="font-mono text-xs text-[#8ed5ff] font-medium">
                  {skill.percentage}%
                </span>
                <div className="w-20 bg-[#242a36] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#38bdf8] h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
