import { Component, OnInit, inject } from '@angular/core';
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
  private readonly _aboutService: AboutService = inject(AboutService);

  public skills: readonly Skill[] = [];
  public technologies: readonly TechnologyLevel[] = [];

  public ngOnInit(): void {
    this.loadData();
  }

  public getTechnologiesByLevel(level: TechnologyLevel['level']): readonly TechnologyLevel[] {
    return this._aboutService.getTechnologiesByLevel(level);
  }

  private loadData(): void {
    this.skills = this._aboutService.getSkills();
    this.technologies = this._aboutService.getTechnologies();
  }
}
