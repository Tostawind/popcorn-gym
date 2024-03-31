import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import Exercice, { Weight } from '@core/models/exercice.interface';
import { CountdownService } from '@core/services/countdown.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-table-sets',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './table-sets.component.html',
  styleUrl: './table-sets.component.scss'
})
export class TableSetsComponent {
  @Input() exercice!: Exercice;
  @Output() isAllSetsDone = new EventEmitter<boolean>();

  countdownService = inject(CountdownService);
  modalService = inject(ModalService);
  sets: boolean[] = [];

  ngOnInit(): void {
    if (this.exercice)  {
      this.sets = new Array(this.exercice.sets).fill(false);
    }
  }


  onChecked(event: Event, index: number) {
    const { checked } = event.target as HTMLInputElement;
    if (checked) {
      this.sets[index] = true;
      this.countdownService.startCountdown(this.exercice.rest);
    } else {
      this.sets[index] = false;
      this.countdownService.stopCountdown();
    }

    const allSelected = this.sets.every((set) => set);
    this.isAllSetsDone.emit(allSelected);
  }

  openWeightsModal(weights: Weight[]) {
    this.modalService.openModal(weights);
  }
}
