import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  logo?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Triple I',
      position: 'Practicante de desarrollo full stack',
      period: '2023 - Presente',
      location: 'Monterrey, Nuevo León, México',
      description: 'Desarrollo de plataformas web completas en un entorno ágil, aplicando buenas prácticas. Participación en el desarrollo de aplicaciones empresariales utilizando tecnologías modernas.',
      technologies: ['Angular', 'Go', 'MongoDB', 'TypeScript', 'Git'],
      logo: 'assets/images/triplei-logo.png'
    }
  ];
}
