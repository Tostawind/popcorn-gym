import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewWorkoutService } from '@core/services/new-workout.service';

@Component({
  selector: 'app-exercice-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './exercice-input.component.html',
  styleUrl: './exercice-input.component.scss'
})
export class ExerciceInputComponent implements OnInit {
  private _newWorkoutService: NewWorkoutService = inject(NewWorkoutService);

  @Input() index = 0;
  @Input() isDropwdownOpen = true;

  exerciceForm!: FormGroup;
  imageUrl: string = '../../../assets/img/imageNotFound.jpg';
  // https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bent-Over-Rows-Supinated-Grip_600x600.png?v=1619977891

  ngOnInit(): void {
    this.exerciceForm = new FormGroup({
      position: new FormControl(this.index, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      sets: new FormControl('', [Validators.required]),
      reps: new FormControl('', [Validators.required]),
      rest: new FormControl(0, [Validators.required]),
      notes: new FormControl(''),
      image: new FormControl('', [Validators.required]),
      weight: new FormControl(0, [Validators.required])
    });
  }

  toggleDropdown(event: any) {
    event.stopPropagation();
  
    const dropdown = event.target.closest('.dropdown');
    dropdown?.classList.toggle('dropdown--closed');
  }

  // When the input loses focus we check if all the inputs are valid and submit the form
  onInputBlur(event: any) {
    console.log('Se ha perdido el foco del campo de entrada:', event.target.value);
    if (this.exerciceForm.valid) {
      this._newWorkoutService.addExercice(this.exerciceForm.value);
    }
  }

  openImageInput(event: any) {
    const imageInput = event.target.parentNode.querySelector('.image__input');
    imageInput?.classList.add('image__input--open');
  }

  closeImageInput(event: any) {
    const imageInput = event.target.closest('.image__input');
    imageInput?.classList.remove('image__input--open');


    // If input it's not empty, set the image URL:
    if (this.exerciceForm.value['image'] !== '') {
      this.imageUrl = this.exerciceForm.value['image'];

      if (this.exerciceForm.valid) {
        this._newWorkoutService.addExercice(this.exerciceForm.value);
      }
    }
  }


  onSubmit() {
    if (this.exerciceForm.valid) {
      console.log('SUBMIT', this.exerciceForm.value);
    }
  }
}
