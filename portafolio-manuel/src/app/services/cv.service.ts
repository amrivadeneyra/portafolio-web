import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private readonly cvUrl: string = '/assets/cv-manuel-rivadeneyra.pdf';

  public downloadCV(): void {
    try {
      const link: HTMLAnchorElement = document.createElement('a');
      link.href = this.cvUrl;
      link.download = 'CV-Manuel-Rivadeneyra.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: abrir en nueva pestaña
      window.open(this.cvUrl, '_blank');
    }
  }

  public openCV(): void {
    window.open(this.cvUrl, '_blank');
  }
} 