import { Component, inject } from '@angular/core';
import { TestingService } from '@core/services/testing.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
  testingService = inject(TestingService);
  data$: Observable<string>;

  constructor() {
    this.data$ = this.testingService.getMiObservable();
  }

}
