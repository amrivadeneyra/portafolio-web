import { Injectable } from '@angular/core';

export interface ScrollOptions {
  readonly elementId: string;
  readonly behavior?: ScrollBehavior;
  readonly block?: ScrollLogicalPosition;
  readonly inline?: ScrollLogicalPosition;
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scrollToElement(options: ScrollOptions): void {
    const element: HTMLElement | null = document.getElementById(options.elementId);
    
    if (element) {
      element.scrollIntoView({
        behavior: options.behavior || 'smooth',
        block: options.block || 'start',
        inline: options.inline || 'nearest'
      });
    }
  }

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  public scrollToBottom(): void {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }
} 