import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService implements OnInit {
  private _miObservable: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    console.log('__TESTING SERVICE__');
  }  

  ngOnInit(): void {
  }

  getMiObservable(): Observable<string> {
    return this._miObservable.asObservable();
  }

  setMiObservable(value: string) {
    this._miObservable.next(value);
  }

  randomData() {
    this._miObservable.next(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
  }

}
