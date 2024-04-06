import { Injectable } from '@angular/core';
import { routines } from '../../data/workouts';
import Routine from '../models/routine.interface';
import Exercice from '../models/exercice.interface';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  constructor() { }

  getRoutines(): Routine[] {
    return routines;
  }

  getRoutineById(id: string): Routine | undefined {
    return routines.find(routine => routine.id === id);
  }
  
  getTotalExercices(id: string): number {
    const routine = routines.find(routine => routine.id === id);
    if (!routine) return 0;
    return routine.exercises.length;
  }

  getExercices(id: string): Exercice[] {
    const routine = routines.find(routine => routine.id === id);
    if (!routine) return [];
    return routine.exercises;
  }
}
