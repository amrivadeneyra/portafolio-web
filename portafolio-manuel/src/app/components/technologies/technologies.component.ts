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
    { name: 'Angular', icon: '🅰️', category: 'frontend' },
    { name: 'TypeScript', icon: '📘', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },
    { name: 'React', icon: '⚛️', category: 'frontend' },
    
    // Backend
    { name: 'Go', icon: '🐹', category: 'backend' },
    { name: 'Java', icon: '☕', category: 'backend' },
    { name: 'Spring Boot', icon: '🌱', category: 'backend' },
    
    // Database
    { name: 'MongoDB', icon: '🍃', category: 'database' },
    
    // Tools
    { name: 'Git', icon: '📝', category: 'tools' },
    { name: 'REST APIs', icon: '🔗', category: 'tools' },
    
    // Learning
    { name: 'Flutter', icon: '📱', category: 'learning' }
  ];

  getTechnologiesByCategory(category: string): Technology[] {
    return this.technologies.filter(tech => tech.category === category);
  }
}
