import { Injectable } from '@angular/core';
import Exercice from '@core/models/exercice.interface';
import Routine from '@core/models/routine.interface';

@Injectable({
  providedIn: 'root'
})
export class NewWorkoutService {
  newWorktout!: Routine;

  constructor() { }

  addExercice(exercice: Exercice) {
    console.log('ADD EXERCICE:', exercice);
    this.newWorktout.exercises?.push(exercice);
    // console.log('ADD EXERCICE:', this.newWorktout);
  }

  addTitle(title: string) {
    this.newWorktout.name = title;
  }
}
