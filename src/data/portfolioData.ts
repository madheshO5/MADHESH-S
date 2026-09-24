import { Project, SkillItem, EducationItem, CertificationItem, AchievementItem } from '../types';

export const INITIAL_SKILLS: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    levelName: 'Advanced',
    percentage: 90,
    icon: 'terminal',
    category: 'programming',
  },
  {
    id: 'sql',
    name: 'SQL',
    levelName: 'Advanced',
    percentage: 85,
    icon: 'database',
    category: 'database',
  },
  {
    id: 'excel',
    name: 'Excel',
    levelName: 'Expert',
    percentage: 95,
    icon: 'table_view',
    category: 'tools',
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    levelName: 'Proficient',
    percentage: 80,
    icon: 'bar_chart',
    category: 'analytics',
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    levelName: 'Advanced',
    percentage: 90,
    icon: 'insights',
    category: 'analytics',
  },
  {
    id: 'data-entry',
    name: 'Data Entry',
    levelName: 'Expert',
    percentage: 95,
    icon: 'edit_document',
    category: 'tools',
  },
  {
    id: 'html-css',
    name: 'HTML/CSS',
    levelName: 'Intermediate',
    percentage: 75,
    icon: 'html',
    category: 'programming',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    levelName: 'Advanced',
    percentage: 85,
    icon: 'dns',
    category: 'database',
  },
  {
    id: 'dotnet',
    name: '.NET Framework',
    levelName: 'Intermediate',
    percentage: 70,
    icon: 'developer_board',
    category: 'programming',
  },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'spam-mail-filter',
    title: 'Spam Mail Filter',
    description:
      'An automated filtering solution designed to detect and block unwanted messages using Bayesian filtering algorithms, secure HTTPS communication, and POP3 mail protocols.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3UXBBbCmaz3b1Nc5ylUkWlEvCc5MnaMCSqAK8-8nz9stHNFwkWn49ez4f0ueLFwTzz_Lqjera3LymKuq-nj-qCyWM04uPTV9mJTJjiV8HGsM6yGZkxl1YQr9bOqNpMuTFePVna8tMlRaZuKESiascsWn54Q8hbQ0DTNvRCcvu0Dm6Yae5gxgBSPkOQbnIxb9QqWK9DvmhcLQyy-ofTYI4KISDSrrIFRzlxY3YENW_HenEl8oNLgjo',
    tags: ['MySQL', '.NET Framework', 'Bayesian filtering', 'HTTPS', 'POP3'],
    githubUrl: 'https://github.com/madhesh/spam-mail-filter',
    liveDemoUrl: '#demo',
    hasInteractiveDemo: true,
  },
];

export const INITIAL_EDUCATION: EducationItem[] = [
  {
    id: 'bsc-cs',
    degree: 'Bachelor of Computer Science',
    institution: 'EGS Pillay Arts & Science College',
    location: 'Nagapattinam, Tamil Nadu',
    period: '[ADD GRADUATION DATE]',
    focus: 'Software Development, Database Management, and Programming',
    icon: 'school',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Education',
    institution: 'George Higher Secondary School',
    location: 'Vishnupuram',
    period: '[ADD COMPLETION DATE]',
    focus: 'Mathematics, Computer Science foundations',
    icon: 'verified',
  },
];

export const SUGGESTED_PROJECTS: Omit<Project, 'id'>[] = [
  {
    title: 'E-Commerce Sales Insights Dashboard',
    description:
      'Interactive Power BI report analyzing over 500,000 retail transactions, delivering customer segmentation, revenue trends, and dynamic cohort metrics.',
    tags: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
    githubUrl: 'https://github.com/madhesh/retail-powerbi-analytics',
    liveDemoUrl: '#retail-dashboard',
    hasInteractiveDemo: false,
  },
  {
    title: 'Automated Web Scraper & ETL Pipeline',
    description:
      'Robust Python pipeline that systematically collects, cleans, and stores pricing intelligence from 12+ competitor sites into PostgreSQL with automated Slack alerts.',
    tags: ['Python', 'Pandas', 'BeautifulSoup', 'PostgreSQL', 'ETL'],
    githubUrl: 'https://github.com/madhesh/python-etl-pipeline',
    liveDemoUrl: '#etl-pipeline',
    hasInteractiveDemo: false,
  },
  {
    title: 'Customer Churn Predictor',
    description:
      'Machine learning model utilizing Scikit-learn and Logistic Regression to forecast telecom subscriber churn with 91.4% precision and actionable retention suggestions.',
    tags: ['Python', 'Scikit-Learn', 'NumPy', 'Data Visualization'],
    githubUrl: 'https://github.com/madhesh/customer-churn-ml',
    liveDemoUrl: '#churn-predictor',
    hasInteractiveDemo: false,
  },
];
