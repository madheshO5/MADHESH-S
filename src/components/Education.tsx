import { useState } from 'react';
import { EducationItem } from '../types';

interface EducationProps {
  education: EducationItem[];
  onUpdatePeriod: (id: string, newPeriod: string) => void;
}

export default function Education({ education, onUpdatePeriod }: EducationProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempPeriod, setTempPeriod] = useState('');

  const handleStartEdit = (item: EducationItem) => {
    setEditingId(item.id);
    setTempPeriod(item.period);
  };

  const handleSave = (id: string) => {
    if (tempPeriod.trim()) {
      onUpdatePeriod(id, tempPeriod.trim());
    }
    setEditingId(null);
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#0e131f]" id="education">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8ed5ff] mb-2 block">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-md text-sm sm:text-base leading-relaxed">
            Formal foundation in computer science principles, database management, and programming logic.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#161c28] border border-[#38bdf8]/15 hover:border-[#38bdf8]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8ed5ff]/10 flex items-center justify-center text-[#8ed5ff] shrink-0 group-hover:scale-105 group-hover:bg-[#38bdf8]/20 transition-all">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#8ed5ff] transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-[#8ed5ff] font-mono text-sm mt-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-[#87929a] font-mono mt-0.5">
                    {item.location}
                  </p>
                  <p className="text-[#94A3B8] text-sm mt-3">
                    Focus: <span className="text-[#dde2f3]">{item.focus}</span>
                  </p>
                </div>
              </div>

              {/* Period Badge / Edit */}
              <div className="shrink-0 flex items-center gap-2">
                {editingId === item.id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tempPeriod}
                      onChange={(e) => setTempPeriod(e.target.value)}
                      placeholder="e.g. 2020 - 2024"
                      className="px-3 py-1.5 rounded-lg bg-[#0e131f] border border-[#38bdf8] text-white text-xs font-mono focus:outline-none"
                    />
                    <button
                      onClick={() => handleSave(item.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#38bdf8] text-[#001e2c] text-xs font-mono font-semibold hover:opacity-90"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleStartEdit(item)}
                    title="Click to customize graduation / completion date"
                    className="px-4 py-2 rounded-xl bg-[#242a36] text-[#87929a] hover:text-[#8ed5ff] hover:border-[#38bdf8]/30 border border-transparent font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{item.period}</span>
                    <span className="material-symbols-outlined text-[14px] opacity-70">edit</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
