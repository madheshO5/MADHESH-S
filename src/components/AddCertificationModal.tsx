import { useState } from 'react';
import { CertificationItem } from '../types';

interface AddCertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: CertificationItem) => void;
}

const PRESET_CERTIFICATIONS: Omit<CertificationItem, 'id'>[] = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera / Google',
    issueDate: '2024',
    credentialId: 'GCC-DA-89421',
    skills: ['Data Cleaning', 'R Programming', 'SQL', 'Tableau', 'Spreadsheets'],
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    issuer: 'Microsoft',
    issueDate: '2024',
    credentialId: 'MS-PL300-98104',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Power Query'],
  },
  {
    title: 'Python for Data Science and Machine Learning Bootcamp',
    issuer: 'Udemy / Jose Portilla',
    issueDate: '2023',
    credentialId: 'UC-PY-77123',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn'],
  },
  {
    title: 'SQL (Advanced) Certificate',
    issuer: 'HackerRank',
    issueDate: '2023',
    credentialId: 'HR-SQL-5401',
    skills: ['SQL Joins', 'Window Functions', 'Subqueries', 'Indexing'],
  },
];

export default function AddCertificationModal({ isOpen, onClose, onAdd }: AddCertificationModalProps) {
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [skills, setSkills] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !issuer.trim()) return;

    onAdd({
      id: `cert-${Date.now()}`,
      title: title.trim(),
      issuer: issuer.trim(),
      issueDate: issueDate.trim() || '2024',
      skills: skills.split(',').map((s) => s.trim()).filter(Boolean),
    });
    onClose();
  };

  const handlePickPreset = (preset: typeof PRESET_CERTIFICATIONS[0]) => {
    onAdd({
      ...preset,
      id: `cert-${Date.now()}`,
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
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Add Certification</h3>
              <p className="text-xs text-[#94A3B8]">Add credential details, issuing organization, and dates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#242a36] text-[#bdc8d1] hover:text-white hover:bg-[#343946] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Presets */}
        <div className="mb-6">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#8ed5ff] mb-2">
            Popular Certifications to Quick-Add:
          </label>
          <div className="space-y-2">
            {PRESET_CERTIFICATIONS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePickPreset(item)}
                className="w-full text-left p-3 rounded-xl bg-[#1a202c] hover:bg-[#242a36] border border-[#38bdf8]/15 text-xs transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="font-semibold text-white group-hover:text-[#8ed5ff]">{item.title}</div>
                  <div className="text-[#87929a] mt-0.5">{item.issuer} · {item.issueDate}</div>
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
            <span className="bg-[#161c28] px-2 text-[#87929a]">Or Custom Credential</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Certificate Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Data Analytics Professional"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Issuing Org *</label>
              <input
                type="text"
                required
                placeholder="e.g. Coursera / IBM"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Year / Date</label>
              <input
                type="text"
                placeholder="e.g. 2024"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#bdc8d1] mb-1 font-mono">Key Skills (comma separated)</label>
            <input
              type="text"
              placeholder="Python, SQL, Tableau, Power BI"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
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
              Save Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
