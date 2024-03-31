import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CountdownService } from '@core/services/countdown.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // countdownValue$: Observable<string> | undefined;
  private countdownService = inject(CountdownService);
  countdown: string = '';

  ngOnInit(): void {
    this.countdownService.countdown$.subscribe((value) => {
      this.countdown = value;
    })
  }
}
