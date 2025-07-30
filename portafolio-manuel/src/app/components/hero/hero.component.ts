import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../../services/cv.service';
import { NavigationService } from '../../services/navigation.service';
import { ClipboardService } from '../../services/clipboard.service';
import { NotificationService } from '../../services/notification.service';
import { ScrollService } from '../../services/scroll.service';
import { CONTACT_CONSTANTS } from '../../constants/contact.constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(
    private readonly cvService: CvService,
    private readonly navigationService: NavigationService,
    private readonly clipboardService: ClipboardService,
    private readonly notificationService: NotificationService,
    private readonly scrollService: ScrollService
  ) {}

  public downloadCV(): void {
    this.cvService.downloadCV();
  }

  public openContact(): void {
    this.scrollService.scrollToElement({ elementId: 'contacto' });
  }

  public openEmail(): void {
    this.navigationService.openEmail(CONTACT_CONSTANTS.EMAIL);
  }

  public openLinkedIn(): void {
    this.navigationService.openLinkedIn(CONTACT_CONSTANTS.LINKEDIN_PROFILE);
  }

  public openGitHub(): void {
    this.navigationService.openGitHub(CONTACT_CONSTANTS.GITHUB_USERNAME);
  }

  public async copyEmail(): Promise<void> {
    const success: boolean = await this.clipboardService.copyToClipboard(CONTACT_CONSTANTS.EMAIL);
    
    if (success) {
      this.notificationService.showNotification({
        message: 'Email copiado al portapapeles',
        type: 'success'
      });
    } else {
      this.notificationService.showNotification({
        message: 'Error al copiar el email',
        type: 'error'
      });
    }
  }
}
