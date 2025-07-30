import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public downloadCV(): void {
    // Aquí se puede implementar la descarga del CV
    console.log('Descargando CV...');
    // Por ahora, abrir en nueva pestaña un enlace de ejemplo
    window.open('/assets/cv-manuel-rivadeneyra.pdf', '_blank');
  }

  public openContact(): void {
    // Aquí se puede implementar la apertura del formulario de contacto
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  public openEmail(): void {
    window.open('mailto:amanuelrivadeneyrai@gmail.com', '_blank');
  }

  public openLinkedIn(): void {
    window.open('https://linkedin.com/in/arivadeneyrai', '_blank');
  }

  public openGitHub(): void {
    window.open('https://github.com/amrivadeneyra', '_blank');
  }

  public copyEmail(): void {
    navigator.clipboard.writeText('amanuelrivadeneyrai@gmail.com').then(() => {
      console.log('Email copiado al portapapeles');
      // Aquí podrías mostrar una notificación
    }).catch(err => {
      console.error('Error al copiar email:', err);
    });
  }
}
