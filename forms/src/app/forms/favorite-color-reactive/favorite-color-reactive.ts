import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormRecord, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../forbidden-name.directive';

@Component({
  selector: 'app-favorite-color-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './favorite-color-reactive.html',
  styleUrl: './favorite-color-reactive.css',
})
export class FavoriteColorReactive {

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     tsp: new FormControl(''),
  //     street: new FormControl('')
  //   })
  // });

  favoriteColorControl = new FormControl('');

  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstName: ['', 
      [Validators.required, Validators.minLength(4), forbiddenNameValidator(/blob/i)]],
    lastName: [''],
    address: this.formBuilder.group({
      city: [''],
      tsp: [''],
      street: ['']
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')])
  });

  get firstName() {
    return this.profileForm.get('firstName');
  }

  testFormRecord() {
    const addresses = new FormRecord<FormControl<string | null>>({});
    addresses.addControl('Andrew', new FormControl('2340 Folsom St'));
    
  }

  setDefault() {
    this.favoriteColorControl.setValue('Default Color');
  }

  submitForm() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  blurEvent(indx : number) {
    const control = this.aliases.at(indx);
    if(control) 
      control.markAsTouched();
  }

}
