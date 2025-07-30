import { Component, OnInit, inject } from '@angular/core';
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
  private readonly _projectService: ProjectService = inject(ProjectService);
  private readonly _navigationService: NavigationService = inject(NavigationService);

  public projects: readonly Project[] = [];

  public ngOnInit(): void {
    this.loadProjects();
  }

  public openUrl(url: string): void {
    if (url) {
      this._navigationService.openUrl({ url });
    }
  }

  private loadProjects(): void {
    this.projects = this._projectService.getProjects();
  }
}
