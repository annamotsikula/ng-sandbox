import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BindingProperties, User } from './interfaces/app.interface';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent) childCompRef!: ChildComponent
  @ViewChild('paragraph') pElem!: ElementRef<HTMLParagraphElement>;

  user: User = {
    name: 'John Doe',
    email: "johndoe@gmail.com",
    age: 22,
    phone: '456789097',
    examPassed: false,
    grade: 4.06,
    personalNumber: '000002383274',
    subjects: ['maths', 'physics', 'programming'],
    id: 2,
    username: 'johndoe',
    birthDate: new Date("2000-12-25"),
    image: "https://robohash.org/Terry.png?set=set4", 
    university: "Capitol University",
  }

  exStudent: User = {
    name: 'Kate Smith ',
    email: "dfhfgh@gmail.com",
    age: 19,
    phone: '87656787654',
    examPassed: true,
    grade: 3.24,
    personalNumber: '000002383274',
    subjects: ['physics', 'programming'],
    id: 1,
    username: 'kate_smith',
    birthDate: new Date("2003-12-25"),
    image: "https://robohash.org/Terry.png?set=set4", 
    university: "Capitol University",
  }

  constructor() {
    // console.log(this.childCompRef) // undefined
  }

  ngAfterViewInit(): void {
    console.log(this.pElem);
    
  }
  change() {
    this.childCompRef.title = 'Title from parent';
    this.pElem.nativeElement.innerText = 'This text is blue'
    this.pElem.nativeElement.style.color = 'blue'
  }

  getInfo(ev: any) {
    console.log(ev)
  }

  ngOnInit() { //OnInit Hook 
    // console.log(this.childCompRef) // undefined 
  }



  element: BindingProperties = {
    name: 'Anchor',
    value: 10,
    tag: 'a'
  }

  myInputValue: string = "Sample Text";
  imgSrc = "https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"


  getValue(ev: Event) {
    const target = ev.target as HTMLButtonElement
    console.log(target); // View ->>> Component 

  }

  getSelectedValue(ev: Event) {
    console.log(ev)
  }

  catchInput(ev: Event) {
    const input = ev.target as HTMLInputElement;
    // this.myInputValue = input.value;
    console.log(`Input Value: ${this.myInputValue}`)
  }
  getInputValue() {
    console.log(this.myInputValue)
  }



}
