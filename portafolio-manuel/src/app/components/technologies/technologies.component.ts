import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'learning';
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  technologies: Technology[] = [
    // Frontend
    { name: 'Angular', icon: 'angular', category: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
    
    // Backend
    { name: 'Go', icon: 'go', category: 'backend' },
    { name: 'Java', icon: 'java', category: 'backend' },
    { name: 'Spring Boot', icon: 'spring', category: 'backend' },
    
    // Database
    { name: 'MongoDB', icon: 'mongodb', category: 'database' },
    
    // Tools
    { name: 'Git', icon: 'git', category: 'tools' },
    { name: 'Postman', icon: 'postman', category: 'tools' },
    
    // Mobile & Learning
    { name: 'Flutter', icon: 'flutter', category: 'learning' },
    { name: 'Dart', icon: 'dart', category: 'learning' }
  ];

  getTechnologiesByCategory(category: string): Technology[] {
    return this.technologies.filter(tech => tech.category === category);
  }

  getIconSvg(iconName: string): string {
    const icons: { [key: string]: string } = {
      angular: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" class="w-8 h-8" alt="Angular">`,
      typescript: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="w-8 h-8" alt="TypeScript">`,
      tailwind: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" class="w-8 h-8" alt="Tailwind CSS">`,
      go: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" class="w-8 h-8" alt="Go">`,
      java: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" class="w-8 h-8" alt="Java">`,
      spring: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" class="w-8 h-8" alt="Spring Boot">`,
      mongodb: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" class="w-8 h-8" alt="MongoDB">`,
      git: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="w-8 h-8" alt="Git">`,
      postman: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" class="w-8 h-8" alt="Postman">`,
      flutter: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" class="w-8 h-8" alt="Flutter">`,
      dart: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" class="w-8 h-8" alt="Dart">`
    };
    return icons[iconName] || '';
  }
}
