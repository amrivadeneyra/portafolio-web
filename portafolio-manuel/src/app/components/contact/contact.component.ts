import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ContactInfo, ContactFormData } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { NotificationService } from '../../services/notification.service';
import { ClipboardService } from '../../services/clipboard.service';
import { NavigationService } from '../../services/navigation.service';
import { CONTACT_CONSTANTS } from '../../constants/contact.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _contactService: ContactService = inject(ContactService);
  private readonly _notificationService: NotificationService = inject(NotificationService);
  private readonly _clipboardService: ClipboardService = inject(ClipboardService);
  private readonly _navigationService: NavigationService = inject(NavigationService);

  public contactForm!: FormGroup;
  public isSubmitting: boolean = false;
  public submitSuccess: boolean = false;
  public submitError: boolean = false;
  public contactInfo: ContactInfo[] = [];

  private readonly destroy$: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    this.initializeComponent();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      return;
    }

    this.setSubmittingState(true);

    try {
      const formData: ContactFormData = this.contactForm.value;
      const success: boolean = await this._contactService.sendContactForm(formData);

      if (success) {
        this.handleSuccess();
      } else {
        this.handleError();
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      this.handleError();
    } finally {
      this.setSubmittingState(false);
    }
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

  private initializeComponent(): void {
    this.initializeForm();
    this.loadContactInfo();
  }

  private initializeForm(): void {
    this.contactForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  private loadContactInfo(): void {
    this.contactInfo = this._contactService.getContactInfo();
  }

  private setSubmittingState(isSubmitting: boolean): void {
    this.isSubmitting = isSubmitting;
    this.submitSuccess = false;
    this.submitError = false;
  }

  private handleSuccess(): void {
    this.submitSuccess = true;
    this.contactForm.reset();
    this.hideSuccessMessageAfterDelay();
  }

  private handleError(): void {
    this.submitError = true;
    this.hideErrorMessageAfterDelay();
  }

  private hideSuccessMessageAfterDelay(): void {
    setTimeout(() => {
      this.submitSuccess = false;
    }, 5000);
  }

  private hideErrorMessageAfterDelay(): void {
    setTimeout(() => {
      this.submitError = false;
    }, 5000);
  }
}
