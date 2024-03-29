import { Component, inject } from '@angular/core';
import { RoutinesService } from '../../../core/services/routines.service';

@Component({
  selector: 'app-exercice-card',
  standalone: true,
  imports: [],
  templateUrl: './exercice-card.component.html',
  styleUrl: './exercice-card.component.scss'
})
export class ExerciceCardComponent {
  routinesService = inject(RoutinesService);

  exercices = this.routinesService.getExercices();
}
