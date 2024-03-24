import { Component } from '@angular/core';
import Exercice from '../../../core/models/exercice.interface';

@Component({
  selector: 'app-table-sets',
  standalone: true,
  imports: [],
  templateUrl: './table-sets.component.html',
  styleUrl: './table-sets.component.scss'
})
export class TableSetsComponent {
  exercices: Exercice[] = [
    {
        set: 1,
        reps: 10,
        weight: 10,
        checked: true,
        rest: "2"
    },
    {
        set: 2,
        reps: 10,
        weight: 20,
        checked: false,
        rest: "1"
    },
    {
        set: 3,
        reps: 10,
        weight: 30,
        checked: false,
        rest: "0.2"
    }
  ]
}
