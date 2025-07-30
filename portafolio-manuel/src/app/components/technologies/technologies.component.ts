import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technology, TechnologyCategory } from '../../models/technology.model';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit {
  public technologies: Technology[] = [];
  public categories: TechnologyCategory[] = ['frontend', 'backend', 'database', 'tools', 'mobile', 'learning'];

  constructor(private readonly technologyService: TechnologyService) {}

  public ngOnInit(): void {
    this.loadTechnologies();
  }

  public getTechnologiesByCategory(category: TechnologyCategory): Technology[] {
    return this.technologyService.getTechnologiesByCategory(category);
  }

  public getIconHtml(iconName: string): string {
    return this.technologyService.getIconHtml(iconName);
  }

  private loadTechnologies(): void {
    this.technologies = this.technologyService.getTechnologies();
  }
}
