import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralStudent, User } from '../interfaces/app.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent  {
  title: string = "Feature Component"

  @Input() student!: GeneralStudent

  @Output() sendInfo: EventEmitter<number> = new EventEmitter<number>()
  
  checkExam() {
    console.log('Exam passed: ',this.student.examPassed)
    this.sendInfo.emit(this.student.id)

  }
}

