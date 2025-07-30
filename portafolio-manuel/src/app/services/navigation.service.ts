import { Injectable } from '@angular/core';

export interface NavigationOptions {
  readonly url: string;
  readonly target?: '_blank' | '_self' | '_parent' | '_top';
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public openUrl(options: NavigationOptions): void {
    const target: string = options.target || '_blank';
    window.open(options.url, target);
  }

  public openEmail(email: string): void {
    this.openUrl({ url: `mailto:${email}` });
  }

  public openLinkedIn(profileId: string): void {
    this.openUrl({ url: `https://linkedin.com/in/${profileId}` });
  }

  public openGitHub(username: string): void {
    this.openUrl({ url: `https://github.com/${username}` });
  }
} 