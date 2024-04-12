import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import Routine from '@core/models/routine.interface';
import { RoutinesService } from '@core/services/routines.service';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss'
})
export class WorkoutsComponent implements OnInit {
  private _routineService = inject(RoutinesService);

  routines:Routine[] = [];

  ngOnInit(): void {
    this._routineService.getRoutines().subscribe(
      (routines) => (this.routines = routines)
    );
  }
}
