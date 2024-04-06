import { Injectable } from '@angular/core';
import { Weight } from '@core/models/exercice.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _isModalOpenSubject = new Subject<boolean>();
  isModalOpen$= this._isModalOpenSubject.asObservable();

  private _weightsSelectedSubject = new Subject<Weight[]>();
  weightsSelected$ = this._weightsSelectedSubject.asObservable();

  private _imageSelectedSubject = new Subject<string>();
  imageSelected$ = this._imageSelectedSubject.asObservable();

  constructor() { }

  openModal(weights: Weight[]) {
    this._isModalOpenSubject.next(true);
    this._imageSelectedSubject.next('');
    this._weightsSelectedSubject.next(weights);
  }

  openImageModal(image: string) {
    this._isModalOpenSubject.next(true);
    this._imageSelectedSubject.next(image);
  }

  closeModal() {
    this._isModalOpenSubject.next(false);
  }
}
