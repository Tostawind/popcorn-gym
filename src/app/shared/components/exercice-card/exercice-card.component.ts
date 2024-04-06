import { Component, Input, inject } from '@angular/core';
import Exercice from '@core/models/exercice.interface';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-exercice-card',
  standalone: true,
  imports: [],
  templateUrl: './exercice-card.component.html',
  styleUrl: './exercice-card.component.scss'
})
export class ExerciceCardComponent {
  @Input() exercice!: Exercice;
  modalService = inject(ModalService);

  imageZoom(image: string) {
    this.modalService.openImageModal(image);
  }
}
