import { Injectable } from '@angular/core';
import { Skill, TechnologyLevel } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private readonly skills: readonly Skill[] = [
    { name: 'Proactividad', icon: '💡' },
    { name: 'Aprendizaje continuo', icon: '📚' },
    { name: 'Pensamiento lógico', icon: '🧠' }
  ];

  private readonly technologies: readonly TechnologyLevel[] = [
    { name: 'Angular', level: 'Avanzado' },
    { name: 'Go', level: 'Avanzado' },
    { name: 'MongoDB', level: 'Avanzado' },
    { name: 'Java', level: 'En formación' },
    { name: 'Spring Boot', level: 'En formación' },
    { name: 'TypeScript', level: 'Intermedio' },
    { name: 'Tailwind CSS', level: 'Intermedio' },
    { name: 'Git', level: 'Intermedio' },
    { name: 'REST APIs', level: 'Intermedio' },
    { name: 'Flutter', level: 'Básico' }
  ];

  public getSkills(): readonly Skill[] {
    return this.skills;
  }

  public getTechnologies(): readonly TechnologyLevel[] {
    return this.technologies;
  }

  public getTechnologiesByLevel(level: TechnologyLevel['level']): readonly TechnologyLevel[] {
    return this.technologies.filter(tech => tech.level === level);
  }
} 