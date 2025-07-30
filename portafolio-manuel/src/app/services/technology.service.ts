import { Injectable } from '@angular/core';
import { Technology, TechnologyCategory } from '../models/technology.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private readonly technologies: Technology[] = [
    // Frontend
    { name: 'Angular', icon: 'angular', category: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
    
    // Backend
    { name: 'Go', icon: 'go', category: 'backend' },
    
    // Database
    { name: 'MongoDB', icon: 'mongodb', category: 'database' },
    
    // Tools
    { name: 'Git', icon: 'git', category: 'tools' },
    { name: 'Postman', icon: 'postman', category: 'tools' },
    
    // Mobile
    { name: 'Flutter', icon: 'flutter', category: 'mobile' },
    { name: 'Dart', icon: 'dart', category: 'mobile' },
    
    // Learning
    { name: 'Java', icon: 'java', category: 'learning' },
    { name: 'Spring Boot', icon: 'spring', category: 'learning' }
  ];

  private readonly iconUrls: Record<string, string> = {
    angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    go: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    spring: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
  };

  public getTechnologies(): Technology[] {
    return [...this.technologies];
  }

  public getTechnologiesByCategory(category: TechnologyCategory): Technology[] {
    return this.technologies.filter((tech: Technology) => tech.category === category);
  }

  public getIconUrl(iconName: string): string {
    return this.iconUrls[iconName] || '';
  }

  public getIconHtml(iconName: string): string {
    const iconUrl: string = this.getIconUrl(iconName);
    const altText: string = this.getAltText(iconName);
    return `<img src="${iconUrl}" class="w-8 h-8" alt="${altText}">`;
  }

  private getAltText(iconName: string): string {
    const technology: Technology | undefined = this.technologies.find(
      (tech: Technology) => tech.icon === iconName
    );
    return technology?.name || iconName;
  }
} 