import { Component, inject } from '@angular/core';
import { RoutinesService }  from '../../../core/services/routines.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  routinesService = inject(RoutinesService);
  exercices = this.routinesService.getExercices();
}
