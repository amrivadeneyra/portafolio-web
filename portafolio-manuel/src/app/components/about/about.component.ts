import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = [
    { name: 'Proactividad', icon: '💡' },
    { name: 'Aprendizaje continuo', icon: '📚' },
    { name: 'Pensamiento lógico', icon: '🧠' }
  ];

  technologies = [
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
}
