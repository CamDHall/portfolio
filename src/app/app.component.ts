import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { SquareEntity } from './models/square_entity';
import { DataService } from '../services/data.service';
import { ExperienceComponent } from "./experience/experience.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SquareComponent, ExperienceComponent]
})
export class AppComponent {
  title = 'Cameron D Hall';
  experienceData!: SquareEntity[];
  educationData!: SquareEntity[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.experienceData = this.dataService.getExperienceData();
    this.educationData = this.dataService.getEducationData();
  }
}
