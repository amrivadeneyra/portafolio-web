import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'manuel@example.com',
      link: 'mailto:manuel@example.com'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/manuel-rivadeneyra',
      link: 'https://linkedin.com/in/manuel-rivadeneyra'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/manuel-rivadeneyra',
      link: 'https://github.com/manuel-rivadeneyra'
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Perú',
      link: null
    }
  ];

  onSubmit(): void {
    // Aquí se puede implementar el envío del formulario
    console.log('Formulario enviado:', this.contactForm);
    // Resetear formulario
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
