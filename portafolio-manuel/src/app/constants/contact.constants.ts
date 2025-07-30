import { environment } from '../../environments/environment';

export const CONTACT_CONSTANTS = {
  EMAIL: environment.contact.email,
  LINKEDIN_PROFILE: environment.contact.linkedinProfile,
  GITHUB_USERNAME: environment.contact.githubUsername,
  LOCATION: environment.contact.location
} as const; 