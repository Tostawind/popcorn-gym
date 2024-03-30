import { Component, inject } from '@angular/core';
import { ModalService } from './modal.service';
import { Weight } from '@core/models/exercice.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  modalService = inject(ModalService);
  isModalOpen:boolean = false;
  weightsSelected: Weight[] = [];

  constructor() { }

  ngOnInit(): void {
    this.modalService.isModalOpen$.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
    })

    this.modalService.weightsSelected$.subscribe((weights) => {
      this.weightsSelected = weights;
    })
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
