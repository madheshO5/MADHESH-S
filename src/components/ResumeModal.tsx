import { useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `
MADHESH S
Data Analyst & Python Developer
Email: madhesh.career@gmail.com | LinkedIn: linkedin.com/in/madhesh | GitHub: github.com/madhesh
Location: Tamil Nadu, India

PROFESSIONAL SUMMARY
Computer Science graduate passionate about data analysis, Python, SQL, Power BI, and building practical technology solutions that transform raw data into actionable business insights. Highly adept in database optimization, ETL pipelines, predictive modeling, and executive reporting.

CORE TECHNICAL SKILLS
- Programming: Python (Pandas, NumPy, Scikit-learn), .NET Framework, HTML/CSS
- Databases & Querying: SQL, MySQL, Database Indexing, Relational Schema Design
- Business Intelligence & Analytics: Power BI, Advanced Excel (VLOOKUP, Pivot Tables, Macros, Power Query), Data Modeling
- Tools & Protocols: Git, GitHub, REST APIs, POP3, HTTPS, Bayesian Filtering

FEATURED PROJECTS
1. Spam Mail Filter
   - Technologies: MySQL, .NET Framework, Bayesian Filtering, HTTPS, POP3
   - Built automated filtering engine applying Bayesian statistical models to inspect incoming email payloads and quarantine spam with high precision.
   - Designed normalized relational schema in MySQL for token probability distributions.

2. Retail & E-Commerce Business Intelligence Dashboard
   - Technologies: Power BI, DAX, Advanced SQL
   - Modeled transactional data across 500k+ customer records, visualizing monthly recurring revenue, customer churn, and cohort lifetime value.

EDUCATION
- Bachelor of Computer Science
  EGS Pillay Arts & Science College, Nagapattinam, Tamil Nadu
  Focus: Software Development, Database Management, and Programming
- Higher Secondary Education
  George Higher Secondary School, Vishnupuram
  Focus: Mathematics, Computer Science foundations
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0e131f] border border-[#38bdf8]/30 shadow-2xl p-6 sm:p-10 flex flex-col print:p-0 print:border-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#3e484f]/40 mb-6 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#8ed5ff]">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Madhesh S - Professional Resume</h3>
              <p className="text-xs text-[#94A3B8]">Data Analyst & Python Developer Curriculum Vitae</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-[#1a202c] border border-[#38bdf8]/20 text-[#8ed5ff] hover:bg-[#242a36] text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              Print / PDF
            </button>
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl bg-[#1a202c] border border-[#38bdf8]/20 text-[#8ed5ff] hover:bg-[#242a36] text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Copy Raw Text"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#242a36] text-[#bdc8d1] hover:text-white hover:bg-[#343946] flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="bg-[#161c28] p-8 rounded-2xl border border-[#38bdf8]/15 space-y-6 text-left print:bg-white print:text-neutral-900 print:p-0 print:border-none">
          {/* Header */}
          <div className="border-b border-[#3e484f]/40 pb-5">
            <h1 className="text-3xl font-bold text-white tracking-tight">MADHESH S</h1>
            <p className="text-[#38bdf8] font-mono text-sm mt-1 font-semibold">
              Data Analyst & Python Developer
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#94A3B8] mt-3 font-mono">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#38bdf8]">mail</span>
                madhesh.career@gmail.com
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#38bdf8]">link</span>
                linkedin.com/in/madhesh
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#38bdf8]">code</span>
                github.com/madhesh
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#38bdf8]">location_on</span>
                Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 font-bold">
              Professional Summary
            </h2>
            <p className="text-sm text-[#dde2f3] leading-relaxed">
              Computer Science graduate passionate about data analysis, Python, SQL, Power BI, and building practical technology solutions that transform raw data into actionable business insights. Strong foundation in software engineering, statistical filtering algorithms, and interactive dashboard design.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 font-bold">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-[#0e131f] border border-[#3e484f]/30">
                <span className="text-xs font-mono text-[#8ed5ff] block mb-1">Languages & Scripting:</span>
                <span className="text-white text-xs">Python (Pandas, NumPy), SQL, .NET Framework, HTML/CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0e131f] border border-[#3e484f]/30">
                <span className="text-xs font-mono text-[#8ed5ff] block mb-1">Analytics & Visualization:</span>
                <span className="text-white text-xs">Power BI, Advanced Excel (VLOOKUP, Pivot, Macros), Data Modeling</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0e131f] border border-[#3e484f]/30">
                <span className="text-xs font-mono text-[#8ed5ff] block mb-1">Databases & Storage:</span>
                <span className="text-white text-xs">MySQL, Relational Schema Normalization, Query Optimization</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0e131f] border border-[#3e484f]/30">
                <span className="text-xs font-mono text-[#8ed5ff] block mb-1">Methodologies & Protocols:</span>
                <span className="text-white text-xs">Bayesian Filtering, POP3, HTTPS, Git, Data Cleaning, ETL</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3 font-bold">
              Key Projects
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0e131f] border border-[#3e484f]/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-sm">Spam Mail Filter</h3>
                  <span className="text-xs text-[#87929a] font-mono">MySQL · .NET · Bayesian</span>
                </div>
                <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                  Engineered an automated filtering system leveraging Bayesian probabilistic calculations to detect and quarantine spam emails with high classification accuracy. Structured secure communication via HTTPS and POP3 mail interfaces.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e131f] border border-[#3e484f]/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-sm">Interactive Business Analytics & Reporting</h3>
                  <span className="text-xs text-[#87929a] font-mono">Power BI · DAX · SQL</span>
                </div>
                <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                  Synthesized raw operational datasets into dynamic visual scorecards with interactive slicing, automated KPI calculation, and trend forecasting for management evaluation.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3 font-bold">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#0e131f] border border-[#3e484f]/30">
                <div>
                  <h4 className="text-white font-medium text-sm">Bachelor of Computer Science</h4>
                  <p className="text-xs text-[#8ed5ff]">EGS Pillay Arts & Science College, Nagapattinam, Tamil Nadu</p>
                  <p className="text-xs text-[#94A3B8] mt-1">Focus: Software Development, Database Management, and Programming</p>
                </div>
                <span className="text-xs font-mono text-[#87929a] mt-2 sm:mt-0">[Graduation Milestone]</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#0e131f] border border-[#3e484f]/30">
                <div>
                  <h4 className="text-white font-medium text-sm">Higher Secondary Education</h4>
                  <p className="text-xs text-[#8ed5ff]">George Higher Secondary School, Vishnupuram</p>
                  <p className="text-xs text-[#94A3B8] mt-1">Focus: Mathematics, Computer Science Foundations</p>
                </div>
                <span className="text-xs font-mono text-[#87929a] mt-2 sm:mt-0">[Completion Milestone]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <span className="text-xs text-[#87929a] font-mono">
            Direct Contact: madhesh.career@gmail.com
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-[#38bdf8] text-[#001e2c] font-semibold text-xs font-mono hover:opacity-90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Download / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#242a36] text-white hover:bg-[#343946] text-xs font-mono transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
