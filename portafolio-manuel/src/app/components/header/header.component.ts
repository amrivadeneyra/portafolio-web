import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public readonly isDarkMode$ = this.themeService.darkMode$;

  constructor(
    private readonly themeService: ThemeService,
    private readonly scrollService: ScrollService
  ) {}

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  public scrollToSection(sectionId: string): void {
    this.scrollService.scrollToElement({ elementId: sectionId });
  }
}
