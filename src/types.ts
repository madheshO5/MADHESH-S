export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  hasInteractiveDemo?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  levelName: 'Expert' | 'Advanced' | 'Proficient' | 'Intermediate';
  percentage: number;
  icon: string;
  category?: 'programming' | 'database' | 'analytics' | 'tools';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
  icon: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}
