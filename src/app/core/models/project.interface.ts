export interface Project {
  title: string;
  description: string;
  techs: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  category: 'personal' | 'professional';
  company?: string;
}