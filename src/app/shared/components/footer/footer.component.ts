import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CountdownService } from '../../../core/services/countdown.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  countdownValue$: Observable<string> | undefined;

  constructor(private countdownService: CountdownService) {
    this.countdownValue$ = this.countdownService.getCountdownObservable();

  }

  ngOnInit(): void {
  }
}
