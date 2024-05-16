import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { GeneralStudent, User } from '../interfaces/app.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class ChildComponent  {
  title: string = "User Profile"

  @Input({required: true}) student!: GeneralStudent

  @Output() sendInfo: EventEmitter<number> = new EventEmitter<number>()
  
  checkExam() {
    console.log('Exam passed: ',this.student.examPassed)
    this.sendInfo.emit(this.student.id)

  }
}

