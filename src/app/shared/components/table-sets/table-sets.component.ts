import { Component, Input, inject } from '@angular/core';
import Exercice from '@core/models/exercice.interface';
import { CountdownService } from '@core/services/countdown.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-table-sets',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './table-sets.component.html',
  styleUrl: './table-sets.component.scss'
})
export class TableSetsComponent {
  @Input() exercice!: Exercice;
  countdownService = inject(CountdownService);
  sets: number[] = [];

  ngOnInit(): void {
    if (this.exercice)  {
      this.sets = new Array(this.exercice.sets).fill(0);
    }
  }


  onChecked(event: Event) {
    // const { checked } = event.target as HTMLInputElement;
    // if (checked) {
    //   this.countdownService.startCountdown(exercice.rest);
    // } else {
    //   this.countdownService.stopCountdown();
    // }
  }
}
