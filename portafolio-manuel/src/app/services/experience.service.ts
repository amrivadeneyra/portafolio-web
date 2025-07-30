import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly experiences: readonly Experience[] = [
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

  public getExperiences(): readonly Experience[] {
    return this.experiences;
  }

  public getExperienceById(index: number): Experience | undefined {
    return this.experiences[index];
  }
} 