import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string | null;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  public isSubmitting = false;
  public submitSuccess = false;
  public submitError = false;

  public contactInfo: ContactInfo[] = [
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

  public onSubmit(): void {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // El formulario se enviará automáticamente a Formspree
    // Aquí solo manejamos el estado de la UI
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.resetForm();
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1000);
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

  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
