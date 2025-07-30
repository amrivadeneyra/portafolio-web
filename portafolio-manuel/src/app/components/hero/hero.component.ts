import { Component, inject } from '@angular/core';
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
  private readonly _cvService: CvService = inject(CvService);
  private readonly _navigationService: NavigationService = inject(NavigationService);
  private readonly _clipboardService: ClipboardService = inject(ClipboardService);
  private readonly _notificationService: NotificationService = inject(NotificationService);
  private readonly _scrollService: ScrollService = inject(ScrollService);

  public downloadCV(): void {
    this._cvService.downloadCV();
  }

  public openContact(): void {
    this._scrollService.scrollToElement({ elementId: 'contacto' });
  }

  public openEmail(): void {
    this._navigationService.openEmail(CONTACT_CONSTANTS.EMAIL);
  }

  public openLinkedIn(): void {
    this._navigationService.openLinkedIn(CONTACT_CONSTANTS.LINKEDIN_PROFILE);
  }

  public openGitHub(): void {
    this._navigationService.openGitHub(CONTACT_CONSTANTS.GITHUB_USERNAME);
  }

  public async copyEmail(): Promise<void> {
    const success: boolean = await this._clipboardService.copyToClipboard(CONTACT_CONSTANTS.EMAIL);
    
    if (success) {
      this._notificationService.showNotification({
        message: 'Email copiado al portapapeles',
        type: 'success'
      });
    } else {
      this._notificationService.showNotification({
        message: 'Error al copiar el email',
        type: 'error'
      });
    }
  }
}
