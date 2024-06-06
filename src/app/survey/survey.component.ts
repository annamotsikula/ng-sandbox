import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../helpers/validators/password.validator';
import { Survey } from './form.type';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  surveyForm = new FormGroup<Survey>({
    email: new FormControl(null, [Validators.email, Validators.pattern('^[a-zA-Z]+$')]),
    password: new FormControl(null, passwordValidator),
    fullName: new FormControl(null, [Validators.maxLength(10), Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.max(80)]),
    address: new FormControl(null),
    address2: new FormControl('456'),
    addressCity: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl()
    }),
  });

  ngOnInit() {
    console.log(this.surveyForm)
  }

  submitForm() {
    // if(this.surveyForm.valid) {
      console.log(this.surveyForm)
    // }
  }

  changeName() {
    this.surveyForm.controls.addressCity?.patchValue({city: 'Tbilisi'});
    // this.surveyForm.get('addressCity')
    // this.surveyForm.controls.addressCity.patchValue({city: 'Tbilisi'});
    // this.surveyForm.controls.addressCity.setValue({city: 'Tbilisi', });  // error
    // this.surveyForm.controls.fullName.setValue('Angular 17');
    // this.surveyForm.controls.fullName.patchValue('angular 16')
  }
  addNewControl(name: keyof Survey, value = null) {
    const newContactControl = new FormControl(value);
    this.surveyForm.addControl(name, newContactControl);
  }

  removeControl(name: keyof Survey) {
    // const control = this.surveyForm.get(name) as AbstractControl
    this.surveyForm.removeControl(name) 
  }
  getControlName(control: string) {
    return this.surveyForm.get(control) as FormControl
  }

  // get passwordError() {
  //   // 
  //   // return
  // }
}
