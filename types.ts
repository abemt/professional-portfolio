export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: JSX.Element;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  role: string;
  image: string;
  description: string;
  technologies: string[];
  liveDemoUrl: string;
  caseStudy: {
    challenge: string;
    solution: string;
    outcome: string;
  };
}