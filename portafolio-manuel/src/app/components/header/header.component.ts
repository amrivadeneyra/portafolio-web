import { Component, inject } from '@angular/core';
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
  private readonly _themeService: ThemeService = inject(ThemeService);
  private readonly _scrollService: ScrollService = inject(ScrollService);

  public readonly isDarkMode$ = this._themeService.darkMode$;

  public toggleTheme(): void {
    this._themeService.toggleTheme();
  }

  public scrollToSection(sectionId: string): void {
    this._scrollService.scrollToElement({ elementId: sectionId });
  }
}
