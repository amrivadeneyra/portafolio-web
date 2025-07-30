import { Injectable } from '@angular/core';
import { ContactInfo, ContactFormData, FormspreePayload } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly contactInfoData: ContactInfo[] = [
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

  private readonly formspreeEndpoint: string = 'https://formspree.io/f/xwpqqool';

  public getContactInfo(): ContactInfo[] {
    return [...this.contactInfoData];
  }

  public async sendContactForm(formData: ContactFormData): Promise<boolean> {
    try {
      const payload: FormspreePayload = this.createFormspreePayload(formData);
      const response: Response = await this.sendToFormspree(payload);
      
      return response.ok;
    } catch (error) {
      console.error('Error sending contact form:', error);
      return false;
    }
  }

  private createFormspreePayload(formData: ContactFormData): FormspreePayload {
    return {
      name: formData.name,
      email: formData.email,
      _replyto: formData.email,
      _subject: formData.subject,
      message: formData.message
    };
  }

  private async sendToFormspree(payload: FormspreePayload): Promise<Response> {
    return await fetch(this.formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  }
} 