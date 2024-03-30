import { Component, Input, inject } from '@angular/core';
import { RoutinesService } from '../../../core/services/routines.service';
import Exercice from '../../../core/models/exercice.interface';

@Component({
  selector: 'app-exercice-card',
  standalone: true,
  imports: [],
  templateUrl: './exercice-card.component.html',
  styleUrl: './exercice-card.component.scss'
})
export class ExerciceCardComponent {
  @Input() exercice!: Exercice;

}
