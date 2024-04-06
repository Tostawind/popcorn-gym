import { Injectable } from '@angular/core';
import { Weight } from '@core/models/exercice.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isModalOpenSubject = new Subject<boolean>();
  isModalOpen$= this.isModalOpenSubject.asObservable();

  private weightsSelectedSubject = new Subject<Weight[]>();
  weightsSelected$ = this.weightsSelectedSubject.asObservable();

  private imageSelectedSubject = new Subject<string>();
  imageSelected$ = this.imageSelectedSubject.asObservable();

  constructor() { }

  openModal(weights: Weight[]) {
    this.isModalOpenSubject.next(true);
    this.imageSelectedSubject.next('');
    this.weightsSelectedSubject.next(weights);
  }

  openImageModal(image: string) {
    this.isModalOpenSubject.next(true);
    this.imageSelectedSubject.next(image);
  }

  closeModal() {
    this.isModalOpenSubject.next(false);
  }
}
