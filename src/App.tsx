import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import ResumeBanner from './components/ResumeBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectDemoModal from './components/ProjectDemoModal';
import ConfigureProjectModal from './components/ConfigureProjectModal';
import AddCertificationModal from './components/AddCertificationModal';
import AddAchievementModal from './components/AddAchievementModal';

import {
  INITIAL_SKILLS,
  INITIAL_PROJECTS,
  INITIAL_EDUCATION,
} from './data/portfolioData';
import { Project, CertificationItem, AchievementItem } from './types';

export default function App() {
  const [skills] = useState(INITIAL_SKILLS);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [education, setEducation] = useState(INITIAL_EDUCATION);
  const [certifications, setCertifications] = useState<CertificationItem[]>([]);
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);

  // Modals state
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [demoProjectId, setDemoProjectId] = useState<string | null>(null);
  const [isConfigureProjectOpen, setIsConfigureProjectOpen] = useState(false);
  const [isAddCertOpen, setIsAddCertOpen] = useState(false);
  const [isAddAchievementOpen, setIsAddAchievementOpen] = useState(false);

  // Scroll to top indicator
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddProject = (newProj: Project) => {
    setProjects((prev) => [...prev, newProj]);
  };

  const handleUpdateEducationPeriod = (id: string, newPeriod: string) => {
    setEducation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, period: newPeriod } : item))
    );
  };

  const handleAddCertification = (newCert: CertificationItem) => {
    setCertifications((prev) => [newCert, ...prev]);
  };

  const handleRemoveCertification = (id: string) => {
    setCertifications((prev) => prev.filter((c) => c.id !== id));
  };

  const handleAddAchievement = (newAchieve: AchievementItem) => {
    setAchievements((prev) => [newAchieve, ...prev]);
  };

  const handleRemoveAchievement = (id: string) => {
    setAchievements((prev) => prev.filter((a) => a.id !== id));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e131f] text-[#dde2f3] flex flex-col selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]">
      {/* Sticky Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 pt-20">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills skills={skills} />
        <Projects
          projects={projects}
          onOpenDemo={(id) => setDemoProjectId(id)}
          onOpenConfigure={() => setIsConfigureProjectOpen(true)}
        />
        <Education
          education={education}
          onUpdatePeriod={handleUpdateEducationPeriod}
        />
        <Certifications
          certifications={certifications}
          onOpenAddModal={() => setIsAddCertOpen(true)}
          onRemoveCertification={handleRemoveCertification}
        />
        <Experience onOpenContact={() => scrollToSection('contact')} />
        <Achievements
          achievements={achievements}
          onOpenAddModal={() => setIsAddAchievementOpen(true)}
          onRemoveAchievement={handleRemoveAchievement}
        />
        <ResumeBanner onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#1a202c] border border-[#38bdf8]/30 text-[#8ed5ff] hover:bg-[#38bdf8] hover:text-[#001e2c] shadow-lg flex items-center justify-center transition-all animate-in fade-in cursor-pointer"
          title="Back to Top"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
        </button>
      )}

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectDemoModal
        isOpen={!!demoProjectId}
        onClose={() => setDemoProjectId(null)}
      />

      <ConfigureProjectModal
        isOpen={isConfigureProjectOpen}
        onClose={() => setIsConfigureProjectOpen(false)}
        onAddProject={handleAddProject}
      />

      <AddCertificationModal
        isOpen={isAddCertOpen}
        onClose={() => setIsAddCertOpen(false)}
        onAdd={handleAddCertification}
      />

      <AddAchievementModal
        isOpen={isAddAchievementOpen}
        onClose={() => setIsAddAchievementOpen(false)}
        onAdd={handleAddAchievement}
      />
    </div>
  );
}
