export interface FeaturedWork {
  id: number;
  title: string;
  category: string;
  techStack: string;
  mainTechStack: string[];
  image: string;
  liveLink: string | null;
  repoLink: string | null;
  description: string;
  challenges: string[];
  improvements: string[];
}
