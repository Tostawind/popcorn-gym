import { Component } from '@angular/core';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { ExerciceCardComponent } from '../../shared/components/exercice-card/exercice-card.component';
import { TableSetsComponent } from '../../shared/components/table-sets/table-sets.component';
import { CountdownComponent } from '../../shared/components/countdown/countdown.component';
import { routine } from '../../data/workouts';

@Component({
  selector: 'app-workout-view',
  standalone: true,
  imports: [PaginationComponent, ExerciceCardComponent, TableSetsComponent, CountdownComponent],
  templateUrl: './workout-view.component.html',
  styleUrl: './workout-view.component.scss'
})
export class WorkoutViewComponent {

  routine = routine;
}
