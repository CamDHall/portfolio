import { Injectable } from '@angular/core';
import { SquareEntity } from '../app/models/square_entity';
import experience from '../assets/data/experience.json';
import education from '../assets/data/education.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getExperienceData(): SquareEntity[] {
    return experience;
  }

  getEducationData(): SquareEntity[] {
    return education;
  }
}
