export interface Project {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly image: string;
  readonly demoUrl?: string;
  readonly githubUrl?: string;
} 