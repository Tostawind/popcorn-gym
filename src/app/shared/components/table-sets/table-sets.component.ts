import { Component, Input, inject } from '@angular/core';
import Exercice from '@core/models/exercice.interface';
import { CountdownService } from '@core/services/countdown.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-sets',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './table-sets.component.html',
  styleUrl: './table-sets.component.scss'
})
export class TableSetsComponent {
  @Input() exercice!: Exercice;
  countdownService = inject(CountdownService);
  sets: boolean[] = [];

  ngOnInit(): void {
    if (this.exercice)  {
      // this.sets = new Array(this.exercice.sets).fill(0);
      this.sets = new Array(this.exercice.sets).fill(false);
    }
  }


  onChecked(event: Event, index: number) {
    const { checked } = event.target as HTMLInputElement;
    if (checked) {
      this.sets[index] = true;
      // this.countdownService.startCountdown(exercice.rest);
    } else {
      this.sets[index] = false;
      // this.countdownService.stopCountdown();
    }
  }
}
