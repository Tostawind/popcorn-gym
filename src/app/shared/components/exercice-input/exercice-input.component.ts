import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-exercice-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './exercice-input.component.html',
  styleUrl: './exercice-input.component.scss'
})
export class ExerciceInputComponent implements OnInit {
  @Input() index = 0;
  exerciceForm!: FormGroup;
  imageUrl: string = '../../../assets/img/imageNotFound.jpg';
  // https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bent-Over-Rows-Supinated-Grip_600x600.png?v=1619977891

  ngOnInit(): void {
    this.exerciceForm = new FormGroup({
      position: new FormControl(this.index, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      sets: new FormControl(0, [Validators.required]),
      reps: new FormControl(0, [Validators.required]),
      rest: new FormControl('0', [Validators.required]),
      notes: new FormControl(''),
      image: new FormControl(''),
      weight: new FormControl(0, [Validators.required])
    });
  }

  openDropdown(event: any) {
    event.stopPropagation();
  
    const dropdown = event.target.closest('.dropdown');
    dropdown?.classList.toggle('dropdown--closed');
  }

  // When the input loses focus we check if all the inputs are valid and submit the form
  onInputBlur(event: any) {
    console.log('Se ha perdido el foco del campo de entrada:', event.target.value);
    if (this.exerciceForm.valid) {
      this.onSubmit();
    }
  }

  openImageInput(event: any) {
    const imageInput = event.target.parentNode.querySelector('.image__input');
    imageInput?.classList.add('image__input--open');
  }

  closeImageInput(event: any) {
    const imageInput = event.target.closest('.image__input');
    imageInput?.classList.remove('image__input--open');
    if (this.exerciceForm.value['image'] !== '') {
      this.imageUrl = this.exerciceForm.value['image'];
    }
      
  }

  onSubmit() {
    if (this.exerciceForm.valid) {
      console.log('SUBMIT', this.exerciceForm.value);
    }
  }
}
