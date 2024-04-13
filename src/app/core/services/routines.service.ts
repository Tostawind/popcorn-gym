import { Injectable, inject } from '@angular/core';
import { routines } from '../../data/workouts';
import Routine from '../models/routine.interface';
import Exercice from '../models/exercice.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {
  private _http = inject(HttpClient);
  private _API_URL: string = 'http://localhost:9000/api/workouts';
  private _isMock: boolean = false;

  public workouts: Routine[] = [];

  getRoutines(): Observable<Routine[]> {
    if (this._isMock) {
      return of(routines);
    } else {
      return this._http.get<Routine[]>(this._API_URL);
    }
  }

  getRoutineById(id: string): Observable<Routine> {
    if (this._isMock) {
      const foundRoutine = routines.find(routine => routine._id === id);
      return of(foundRoutine).pipe(
        map(routine => routine || {} as Routine)
      );
    } else {
      return this._http.get<Routine>(this._API_URL + `/${id}`).pipe(
        map(routine => routine || {} as Routine)
      );

    }
  }
}
