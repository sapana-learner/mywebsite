export interface Project {
  id: string;
  code: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  fullOverview: string;
  stack: string[];
  specs: { label: string; value: string }[];
  architectureSummary: string;
  githubUrl: string;
  demoUrl?: string;
  diagramType: 'rag' | 'sparkline' | 'nodes';
}

export interface LearningTrack {
  id: string;
  trackNumber: string;
  tag: string;
  title: string;
  description: string;
  focusText: string;
  iconName: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  description?: string;
  iconName: string;
  skills: string[];
  deepeningSkills?: string[];
  footerNote: string;
  statusBadge: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
}

export interface VisionPhase {
  phaseNumber: string;
  title: string;
  summary: string;
  status: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
}
