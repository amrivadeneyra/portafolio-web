import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactInfo, ContactFormData } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;
  public isSubmitting: boolean = false;
  public submitSuccess: boolean = false;
  public submitError: boolean = false;
  public contactInfo: ContactInfo[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactService
  ) {}

  public ngOnInit(): void {
    this.initializeComponent();
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
    window.open('mailto:amanuelrivadeneyrai@gmail.com', '_blank');
  }

  public openLinkedIn(): void {
    window.open('https://linkedin.com/in/arivadeneyrai', '_blank');
  }

  public openGitHub(): void {
    window.open('https://github.com/amrivadeneyra', '_blank');
  }

  public copyEmail(): void {
    navigator.clipboard.writeText('amanuelrivadeneyrai@gmail.com')
      .then(() => console.log('Email copied to clipboard'))
      .catch(err => console.error('Error copying email:', err));
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
