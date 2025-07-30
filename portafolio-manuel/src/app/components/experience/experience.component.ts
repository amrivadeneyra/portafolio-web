import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  private readonly _experienceService: ExperienceService = inject(ExperienceService);

  public experiences: readonly Experience[] = [];

  public ngOnInit(): void {
    this.loadExperiences();
  }

  private loadExperiences(): void {
    this.experiences = this._experienceService.getExperiences();
  }
}
