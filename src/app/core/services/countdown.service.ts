import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, map, switchMap, takeWhile, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {  
  private countdown$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  startCountdown(rest: string) {
    console.log('START!')
    const duration = Number(rest) * 60;
    let remainingTime = duration;
    console.log(remainingTime)
    if (duration > 0) {
      interval(1000).pipe(
        takeWhile(() => remainingTime > 0),
        map(() => {
          console.log('xxx');
          if(remainingTime === 0) {
            this.countdown$.next('0:00');
          } else {
            remainingTime--;
            this.countdown$.next(`${Math.floor(remainingTime / 60)}:${((remainingTime % 60) < 10 ? '0' : '') + (remainingTime % 60)}`);
          }
          console.log(this.countdown$.value)
        })
      ).subscribe();
    }
  }

  stopCountdown() {
    this.countdown$.next('');
  }

  getCountdownObservable(): Observable<string> {
    return this.countdown$.asObservable();
  }
}
