import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, TechnologyLevel } from '../../models/about.model';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  public skills: readonly Skill[] = [];
  public technologies: readonly TechnologyLevel[] = [];

  constructor(private readonly aboutService: AboutService) {}

  public ngOnInit(): void {
    this.loadData();
  }

  public getTechnologiesByLevel(level: TechnologyLevel['level']): readonly TechnologyLevel[] {
    return this.aboutService.getTechnologiesByLevel(level);
  }

  private loadData(): void {
    this.skills = this.aboutService.getSkills();
    this.technologies = this.aboutService.getTechnologies();
  }
}
