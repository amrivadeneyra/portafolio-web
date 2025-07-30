import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Gestor de Tareas',
      description: 'Aplicación web para gestionar tareas de manera eficiente con creación, edición y eliminación de tareas.',
      technologies: ['Angular', 'Go', 'MongoDB'],
      image: 'assets/images/task-manager.jpg',
      demoUrl: 'https://task-manager-demo.com',
      githubUrl: 'https://github.com/manuel-rivadeneyra/task-manager'
    },
    {
      title: 'Buscador de Imágenes',
      description: 'Aplicación que permite buscar imágenes utilizando la API de Unsplash.',
      technologies: ['React', 'TypeScript', 'Unsplash API'],
      image: 'assets/images/image-searcher.jpg',
      demoUrl: 'https://image-searcher-demo.com',
      githubUrl: 'https://github.com/manuel-rivadeneyra/image-searcher'
    },
    {
      title: 'Aplicación de Notas',
      description: 'Aplicación móvil para crear y organizar notas de manera sencilla.',
      technologies: ['Flutter', 'Dart'],
      image: 'assets/images/notes-app.jpg',
      demoUrl: 'https://notes-app-demo.com',
      githubUrl: 'https://github.com/manuel-rivadeneyra/notes-app'
    }
  ];

  openUrl(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
