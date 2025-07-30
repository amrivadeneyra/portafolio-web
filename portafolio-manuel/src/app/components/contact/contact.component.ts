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
      value: 'amanuelrivadeneyrai@gmail.com',
      link: 'mailto:amanuelrivadeneyrai@gmail.com'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/arivadeneyrai',
      link: 'https://linkedin.com/in/arivadeneyrai'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/amrivadeneyra',
      link: 'https://github.com/amrivadeneyra'
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
