import { Routes } from '@angular/router';
import { WorkoutViewComponent } from './pages/workout-view/workout-view.component';
import { TestingComponent } from './pages/testing/testing.component';
import { WorkoutsComponent } from '@pages/workouts/workouts.component';
import { WorkoutCreateComponent } from '@pages/workout-create/workout-create.component';

export const routes: Routes = [
    {
        path: '',
        component: WorkoutsComponent
    },
    // TODO: It's not finish:
    // {
    //     path: 'workout/new',
    //     component: WorkoutCreateComponent
    // },
    {
        path: 'workout/:workoutId',
        component: WorkoutViewComponent
    },
    {
        path: 'test',
        component: TestingComponent
    }
];
