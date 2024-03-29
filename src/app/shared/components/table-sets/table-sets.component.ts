import { Component, inject } from '@angular/core';
import Exercice from '../../../core/models/exercice.interface';
import { CountdownService } from '../../../core/services/countdown.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-table-sets',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './table-sets.component.html',
  styleUrl: './table-sets.component.scss'
})
export class TableSetsComponent {
  countdownService = inject(CountdownService);
  exercices: Exercice[] = [
    {
        set: 1,
        reps: 10,
        weight: 10,
        checked: true,
        rest: "2"
    },
    {
        set: 2,
        reps: 10,
        weight: 20,
        checked: false,
        rest: "1"
    },
    {
        set: 3,
        reps: 10,
        weight: 30,
        checked: false,
        rest: "0.2"
    }
  ]

  onChecked(event: Event, exercice: Exercice) {
    const { checked } = event.target as HTMLInputElement;
    if (checked) {
      this.countdownService.startCountdown(exercice.rest);
    } else {
      this.countdownService.stopCountdown();
    }
  }
}
