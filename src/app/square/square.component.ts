import { Component, Input } from '@angular/core';
import { SquareEntity } from '../models/square_entity';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  @Input()
  data!: SquareEntity;
  imagePath!: string;

  ngOnInit() {
    this.imagePath = this.getImagePath();
  }

  getImagePath() {
    return `assets/images/${this.data.photoName}`
  }
}
