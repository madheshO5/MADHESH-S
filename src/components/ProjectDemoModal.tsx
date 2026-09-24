import { useState } from 'react';

interface ProjectDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AnalysisResult {
  isSpam: boolean;
  score: number;
  highlightedKeywords: string[];
  protocolInfo: {
    protocol: string;
    encryption: string;
    database: string;
    bayesProbability: number;
  };
}

const PRESET_EMAILS = [
  {
    label: 'Spam Example (Lottery Scam)',
    text: 'URGENT: Congratulations! You have won $1,500,000 in the International Prize Lottery. Reply with your bank details immediately to claim your free reward!',
  },
  {
    label: 'Ham Example (Work Inquiry)',
    text: 'Hi Madhesh, I reviewed your GitHub repository and was impressed by your SQL and Python data analysis projects. Are you available for a quick interview this week?',
  },
  {
    label: 'Suspicious Phishing Attempt',
    text: 'Security Alert: Your account password has expired. Click here to verify your identity now or your account will be suspended within 24 hours.',
  },
];

export default function ProjectDemoModal({ isOpen, onClose }: ProjectDemoModalProps) {
  const [emailText, setEmailText] = useState(PRESET_EMAILS[0].text);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  if (!isOpen) return null;

  const runBayesianFilter = () => {
    setIsScanning(true);
    setTimeout(() => {
      const spamKeywords = [
        'urgent',
        'congratulations',
        'won',
        'lottery',
        'prize',
        'free',
        'bank details',
        'claim',
        'reward',
        'password expired',
        'verify',
        'suspended',
        'click here',
        'immediately',
        'dollars',
        '$',
      ];

      const lower = emailText.toLowerCase();
      const detected = spamKeywords.filter((k) => lower.includes(k));

      // Simple bayesian scoring algorithm simulation
      const baseSpamTokens = detected.length;
      const totalWords = emailText.split(/\s+/).filter(Boolean).length || 1;
      const spamRatio = Math.min(1, (baseSpamTokens * 3) / Math.max(totalWords, 6));
      const score = Math.round(spamRatio * 100);
      const isSpam = score >= 45;

      setAnalysis({
        isSpam,
        score,
        highlightedKeywords: detected,
        protocolInfo: {
          protocol: 'POP3 / SMTP-Relay',
          encryption: 'TLS 1.3 / HTTPS',
          database: 'MySQL 8.0 (Token Table)',
          bayesProbability: +(spamRatio.toFixed(3)),
        },
      });
      setIsScanning(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#161c28] border border-[#38bdf8]/30 shadow-2xl flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#3e484f]/40 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#8ed5ff]">
              <span className="material-symbols-outlined">mark_email_read</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Spam Mail Filter - Live Sandbox</h3>
              <p className="text-xs text-[#94A3B8]">Bayesian Classification & POP3 Protocol Inspection</p>
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
        <div className="mb-4">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
            Load Test Preset:
          </label>
          <div className="flex flex-wrap gap-2">
            {PRESET_EMAILS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setEmailText(preset.text);
                  setAnalysis(null);
                }}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#1a202c] border border-[#38bdf8]/20 text-[#8ed5ff] hover:bg-[#242a36] transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Text Area */}
        <div className="mb-4">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
            Raw Email Content to Inspect:
          </label>
          <textarea
            rows={4}
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            placeholder="Paste email body here to run the Bayesian classification algorithm..."
            className="w-full px-4 py-3 rounded-xl bg-[#0e131f] border border-[#38bdf8]/20 text-white font-mono text-sm focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
          />
        </div>

        <button
          onClick={runBayesianFilter}
          disabled={isScanning || !emailText.trim()}
          className="w-full py-3 rounded-xl bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-[#001e2c] font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] disabled:opacity-50"
        >
          {isScanning ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
              Analyzing Token Probabilities...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">neurology</span>
              Execute Bayesian Classification
            </>
          )}
        </button>

        {/* Analysis Output */}
        {analysis && (
          <div className="mt-6 pt-6 border-t border-[#3e484f]/40 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0e131f] border border-[#38bdf8]/20">
              <div>
                <span className="text-xs text-[#87929a] uppercase font-mono block">Algorithm Decision</span>
                <span
                  className={`text-lg font-bold flex items-center gap-2 ${
                    analysis.isSpam ? 'text-rose-400' : 'text-emerald-400'
                  }`}
                >
                  <span className="material-symbols-outlined">
                    {analysis.isSpam ? 'gpp_bad' : 'verified_user'}
                  </span>
                  {analysis.isSpam ? 'SPAM DETECTED (Quarantine)' : 'LEGITIMATE (HAM)'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#87929a] uppercase font-mono block">Spam Probability</span>
                <span className="text-2xl font-bold font-mono text-white">{analysis.score}%</span>
              </div>
            </div>

            {/* Token details */}
            <div className="p-4 rounded-2xl bg-[#1a202c] border border-[#3e484f]/30 space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#8ed5ff] tracking-wider">
                Bayesian Token Inspection & Architecture:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-[#0e131f] text-center">
                  <div className="text-[#87929a]">P(Spam)</div>
                  <div className="font-mono text-white font-semibold">{analysis.protocolInfo.bayesProbability}</div>
                </div>
                <div className="p-2 rounded-lg bg-[#0e131f] text-center">
                  <div className="text-[#87929a]">DB Storage</div>
                  <div className="font-mono text-white font-semibold">MySQL Tokens</div>
                </div>
                <div className="p-2 rounded-lg bg-[#0e131f] text-center">
                  <div className="text-[#87929a]">Transport</div>
                  <div className="font-mono text-white font-semibold">POP3 / HTTPS</div>
                </div>
                <div className="p-2 rounded-lg bg-[#0e131f] text-center">
                  <div className="text-[#87929a]">Framework</div>
                  <div className="font-mono text-white font-semibold">.NET Engine</div>
                </div>
              </div>

              {analysis.highlightedKeywords.length > 0 ? (
                <div>
                  <span className="text-xs text-[#87929a] block mb-1">Triggered Weight Keywords:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {analysis.highlightedKeywords.map((word, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-emerald-400/90 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  No known high-frequency spam triggers detected in tokens.
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#242a36] text-white hover:bg-[#343946] text-xs font-mono transition-colors"
          >
            Close Sandbox
          </button>
        </div>
      </div>
    </div>
  );
}
