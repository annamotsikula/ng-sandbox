import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  surveyForm = new FormGroup({
    email: new FormControl('test@test.com'),
    fullName: new FormControl(),
    address: new FormControl('123'),
    address2: new FormControl('456'),
    addressCity: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl()
    }),
  })

  ngOnInit() {
    console.log(this.surveyForm)
  }

  submitForm() {
    console.log(this.surveyForm.value)
  }
}
