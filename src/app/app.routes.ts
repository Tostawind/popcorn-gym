import { Routes } from '@angular/router';
import { WorkoutViewComponent } from './pages/workout-view/workout-view.component';
import { TestingComponent } from './pages/testing/testing.component';

export const routes: Routes = [
    {
        path: '',
        component: WorkoutViewComponent
    },
    {
        path: 'test',
        component: TestingComponent
    }
];
