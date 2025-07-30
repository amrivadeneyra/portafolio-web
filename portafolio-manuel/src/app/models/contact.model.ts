export interface ContactInfo {
  readonly icon: string;
  readonly label: string;
  readonly value: string;
  readonly link: string | null;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export interface FormspreePayload {
  readonly name: string;
  readonly email: string;
  readonly _replyto: string;
  readonly _subject: string;
  readonly message: string;
} 