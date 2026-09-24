import { CertificationItem } from '../types';

interface CertificationsProps {
  certifications: CertificationItem[];
  onOpenAddModal: () => void;
  onRemoveCertification: (id: string) => void;
}

export default function Certifications({
  certifications,
  onOpenAddModal,
  onRemoveCertification,
}: CertificationsProps) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#080e1a]" id="certifications">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8ed5ff] mb-2 block">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Certifications
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-md text-sm sm:text-base leading-relaxed">
            Verified credentials and professional courses validating analytical and programming expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render Active Certifications */}
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-8 rounded-2xl bg-[#1a202c] border border-[#38bdf8]/15 hover:border-[#38bdf8]/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center text-[#8ed5ff] group-hover:bg-[#38bdf8]/20 transition-all">
                    <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                  </div>
                  <span className="font-mono text-xs text-[#87929a]">{cert.issueDate}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#8ed5ff] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[#8ed5ff] font-mono text-xs mb-4">{cert.issuer}</p>

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-[#242a36] text-[#bdc8d1] font-mono text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#3e484f]/20 flex items-center justify-between text-xs font-mono">
                <span className="text-[#87929a] truncate max-w-[180px]">
                  ID: {cert.credentialId || 'VERIFIED'}
                </span>
                <button
                  onClick={() => onRemoveCertification(cert.id)}
                  className="text-rose-400 hover:text-rose-300 opacity-60 hover:opacity-100 transition-opacity"
                  title="Remove Certification"
                >
                  <span className="material-symbols-outlined text-[16px]">delete</span>
                </button>
              </div>
            </div>
          ))}

          {/* Add Certification Box */}
          <div className="p-8 rounded-2xl bg-[#1a202c]/40 border border-dashed border-[#3e484f]/40 flex flex-col items-center justify-center text-center hover:border-[#38bdf8]/50 transition-all min-h-[260px]">
            <div className="w-16 h-16 rounded-2xl bg-[#242a36] flex items-center justify-center text-[#87929a] mb-4">
              <span className="material-symbols-outlined text-[32px]">add</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Add Certification</h3>
            <p className="text-[#94A3B8] text-xs sm:text-sm mb-6 max-w-xs leading-relaxed">
              Upload or link completed certifications from Coursera, HackerRank, Microsoft, or Google.
            </p>
            <button
              onClick={onOpenAddModal}
              className="px-4 py-2 rounded-xl bg-[#242a36] text-[#8ed5ff] font-mono text-xs hover:bg-[#343946] border border-[#38bdf8]/20 transition-all cursor-pointer shadow-sm"
            >
              Add Certification
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
