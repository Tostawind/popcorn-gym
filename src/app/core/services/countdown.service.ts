import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval, map, switchMap, takeWhile, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {  
  countdown$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private countdownSuscription: Subscription | undefined;
  private countdownInProgress: boolean = false;
  private remainingTime: number = 0;

  constructor() { }

  startCountdown(rest: string) {
    console.log('________________START!')
    const duration = Number(rest) * 60;

    if (this.countdownInProgress) { this.stopCountdown(); }

    this.remainingTime = duration + 1;

    if(duration > 0) {
      this.countdownInProgress = true;

      this.countdownSuscription = interval(1000).pipe(
        takeWhile(() => this.remainingTime >= 0)
      ).subscribe(() => {
        if(this.remainingTime === 0) {
          this.stopCountdown();
        } else {
          this.remainingTime--;
          this.countdown$.next(`${Math.floor(this.remainingTime / 60)}:${((this.remainingTime % 60) < 10 ? '0' : '') + (this.remainingTime % 60)}`);
        }
      });
    }

  }

  stopCountdown() {
    if(this.countdownSuscription) {
      console.log('________________STOP!');
      this.countdown$.next('');
      this.countdownSuscription.unsubscribe();
    }
    this.countdownInProgress = false;
  }
}
