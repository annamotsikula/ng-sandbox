import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../helpers/validators/password.validator';
import { RequirementGroup, Survey } from './form.type';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  surveyForm = new FormGroup<Survey>({
    email: new FormControl('test@test.com', [Validators.email, Validators.pattern('^[a-zA-Z]+$')]),
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
    checkUser: new FormControl(false, [Validators.requiredTrue]),
    skills: new FormArray([
      new FormControl()
    ]),
    requirements: new FormArray([
      new FormGroup({
        addr1: new FormControl(),
        addr2: new FormControl(),
      })
    ])
  });

  ngOnInit() {
    console.log(this.surveyForm)
    this.surveyForm.controls.email?.disable();
    


  }

  submitForm() {
    if(this.surveyForm.valid) {
      console.log(this.surveyForm.getRawValue());

    }

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
    this.surveyForm.removeControl(name); 
  }
  getControlName(control: string) {
    return this.surveyForm.get(control) as FormControl
  }

  addSkills() {
    const skillsArr = this.surveyForm.controls.skills;
    const newControl = new FormControl("", [Validators.required]);
    skillsArr?.push(newControl);

    console.log(skillsArr)
  }
  addNewRequirement() {
    const arr = this.surveyForm.controls.requirements;
    const newRequirement = new FormGroup<RequirementGroup>({
      addr1: new FormControl(null, [Validators.required]),
      addr2: new FormControl(null, [Validators.required]),
    });
    arr?.push(newRequirement)
  }

  deleteArr(index: number, arrName: 'skills' | 'requirements') {
    const arr = this.surveyForm.controls[arrName];
    arr?.removeAt(index)
  }
  get skillsArr() {
    
   return this.surveyForm.controls.skills
  }

}
