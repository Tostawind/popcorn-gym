import { Component } from '@angular/core';
import Routine from '@core/models/routine.interface';
import { ExerciceInputComponent } from '@shared/components/exercice-input/exercice-input.component';

@Component({
  selector: 'app-workout-create',
  standalone: true,
  imports: [ExerciceInputComponent],
  templateUrl: './workout-create.component.html',
  styleUrl: './workout-create.component.scss'
})
export class WorkoutCreateComponent {
  workout: Routine | null = null;
  exercices = [1,2];
}
