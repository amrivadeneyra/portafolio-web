import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      this.setTheme(prefersDark);
    }
  }

  toggleTheme(): void {
    const newTheme = !this.darkMode.value;
    this.setTheme(newTheme);
  }

  private setTheme(isDark: boolean): void {
    this.darkMode.next(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  isDarkMode(): boolean {
    return this.darkMode.value;
  }
}
