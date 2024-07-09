import { Component, Input } from '@angular/core';
import { SquareEntity } from '../models/square_entity';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() data!: SquareEntity;
  imagePath!: string;

  ngOnInit() {
    this.imagePath = this.getImagePath();
  }

  getImagePath() {
    return `assets/images/${this.data.photoName}`
  }
}
