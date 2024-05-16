import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { GeneralStudent, User } from '../interfaces/app.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges {
  title: string = "Feature Component"

  @Input({required: true}) student!: GeneralStudent
  @Input() isStudent = false

  @Output() sendInfo: EventEmitter<number> = new EventEmitter<number>()
  
  checkExam() {
    if(this.student) {
      console.log('Exam passed: ',this.student.examPassed)
      this.sendInfo.emit(this.student.id)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //pro
    console.log(changes)
    const changedStudent = changes['studenkjugft'];
    // changedStudent.
  }
ngOnInit() {
  console.log('Init')
}

}

