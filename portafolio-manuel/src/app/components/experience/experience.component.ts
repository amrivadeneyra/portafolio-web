import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
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
      company: 'Triple i Soluciones',
      position: 'Full Stack Developer - Trainee',
      period: 'Febrero 2023 - Actualidad',
      location: 'Monterrey, Nuevo León, México · En remoto',
      description: 'Desarrollo de funcionalidades en una plataforma web utilizando Angular (TypeScript) para el frontend y Go para el backend.',
      technologies: ['Angular', 'TypeScript', 'Go', 'MongoDB', 'Tailwind CSS', 'Flutter', 'Dart', 'Git'],
      responsibilities: [
        'Implementación de APIs REST y manejo de datos con MongoDB',
        'Creación de componentes responsivos y modulares con Tailwind CSS',
        'Participación en pruebas, control de versiones con Git y revisión de código entre pares',
        'Apoyo en el desarrollo de una versión móvil utilizando Flutter y Dart',
        'Colaboración en un equipo ágil, aplicando principios de arquitectura limpia y metodologías Scrum'
      ],
      logo: 'assets/images/triplei-logo.png'
    }
  ];
}
