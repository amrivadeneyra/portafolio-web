export interface Technology {
  name: string;
  icon: string;
  category: TechnologyCategory;
}

export type TechnologyCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'mobile' | 'learning'; 