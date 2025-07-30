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
  downloadCV(): void {
    // Aquí se puede implementar la descarga del CV
    console.log('Descargando CV...');
  }

  openContact(): void {
    // Aquí se puede implementar la apertura del formulario de contacto
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}
