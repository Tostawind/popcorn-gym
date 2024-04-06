import { Routes } from '@angular/router';
import { WorkoutViewComponent } from './pages/workout-view/workout-view.component';
import { TestingComponent } from './pages/testing/testing.component';
import { WorkoutsComponent } from '@pages/workouts/workouts.component';

export const routes: Routes = [
    {
        path: '',
        component: WorkoutsComponent
    },
    {
        path: 'workout/:workoutId',
        component: WorkoutViewComponent
    },
    {
        path: 'test',
        component: TestingComponent
    }
];
