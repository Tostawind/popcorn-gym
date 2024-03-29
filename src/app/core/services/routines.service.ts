import { Injectable } from '@angular/core';
import { routine } from '../../data/workouts';
import Routine from '../models/routine.interface';
import Exercice from '../models/exercice.interface';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  constructor() { }

  getRoutine(): Routine {
    return routine;
  }
  
  getTotalExercices(): number {
    return routine.exercises.length;
  }

  getExercices(): Exercice[] {
    return routine.exercises;
  }
}
