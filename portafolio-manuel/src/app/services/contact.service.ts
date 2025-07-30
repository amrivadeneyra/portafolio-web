import { Injectable } from '@angular/core';
import { ContactInfo, ContactFormData, FormspreePayload } from '../models/contact.model';
import { CONTACT_CONSTANTS } from '../constants/contact.constants';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly contactInfoData: ContactInfo[] = [
    {
      icon: '📧',
      label: 'Email',
      value: CONTACT_CONSTANTS.EMAIL,
      link: `mailto:${CONTACT_CONSTANTS.EMAIL}`
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: `linkedin.com/in/${CONTACT_CONSTANTS.LINKEDIN_PROFILE}`,
      link: `https://linkedin.com/in/${CONTACT_CONSTANTS.LINKEDIN_PROFILE}`
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: `github.com/${CONTACT_CONSTANTS.GITHUB_USERNAME}`,
      link: `https://github.com/${CONTACT_CONSTANTS.GITHUB_USERNAME}`
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: CONTACT_CONSTANTS.LOCATION,
      link: null
    }
  ];

  private readonly formspreeEndpoint: string = environment.formspreeEndpoint;

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