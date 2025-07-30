import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  public projects: readonly Project[] = [];

  constructor(
    private readonly projectService: ProjectService,
    private readonly navigationService: NavigationService
  ) {}

  public ngOnInit(): void {
    this.loadProjects();
  }

  public openUrl(url: string): void {
    if (url) {
      this.navigationService.openUrl({ url });
    }
  }

  private loadProjects(): void {
    this.projects = this.projectService.getProjects();
  }
}
