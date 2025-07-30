export interface Skill {
  readonly name: string;
  readonly icon: string;
}

export interface TechnologyLevel {
  readonly name: string;
  readonly level: 'Básico' | 'Intermedio' | 'Avanzado' | 'En formación';
} 