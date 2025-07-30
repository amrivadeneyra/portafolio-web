import { Component, OnInit, OnDestroy } from '@angular/core';
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
  public contactForm!: FormGroup;
  public isSubmitting: boolean = false;
  public submitSuccess: boolean = false;
  public submitError: boolean = false;
  public contactInfo: ContactInfo[] = [];

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactService,
    private readonly notificationService: NotificationService,
    private readonly clipboardService: ClipboardService,
    private readonly navigationService: NavigationService
  ) {}

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
      const success: boolean = await this.contactService.sendContactForm(formData);

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

  private initializeComponent(): void {
    this.initializeForm();
    this.loadContactInfo();
  }

  private initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  private loadContactInfo(): void {
    this.contactInfo = this.contactService.getContactInfo();
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
