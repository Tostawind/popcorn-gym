import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { ExerciceCardComponent } from '../../shared/components/exercice-card/exercice-card.component';
import { TableSetsComponent } from '../../shared/components/table-sets/table-sets.component';
import { CountdownComponent } from '../../shared/components/countdown/countdown.component';

import { register } from 'swiper/element/bundle';
import { RoutinesService } from '../../core/services/routines.service';
register();

@Component({
  selector: 'app-workout-view',
  standalone: true,
  imports: [PaginationComponent, ExerciceCardComponent, TableSetsComponent, CountdownComponent],
  templateUrl: './workout-view.component.html',
  styleUrl: './workout-view.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkoutViewComponent implements AfterViewInit {
  routinesService = inject(RoutinesService);
  routineName = this.routinesService.getRoutine().name;
  exercices = this.routinesService.getExercices();

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');

    const swiperParams = {
      slidesPerView: 1,
      speed: 1000,
      cssMode: true,
      spaceBetween: 40,
      injectStyles: [`
      .swiper-pagination {
        top: 0 !important;
        bottom: auto !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      }

      .swiper-pagination::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 2px;
        background-color: var(--accent);
    }

      .swiper-pagination-bullet {
        position: relative;
        z-index: 1;
        width: 30px;
        height: 30px;
        text-align: center;
        font-weight: bold;
        line-height: 29px;
        font-size: 16px;
        color: var(--white);
        opacity: 1;
        margin: 0 !important;
        background: var(--secondary);
        border: 2px solid var(--accent);
      }

      .swiper-pagination-bullet-active {
        color: var(--secondary);
        background: var(--accent);
      }
      `],
      pagination: {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    };

    if (swiperEl) {
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  }

}
