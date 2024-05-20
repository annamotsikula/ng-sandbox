import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent implements OnInit {
  title: string = 'This is Pipes comPonent';
  number: number = 0.12
  user = {
    firstName: 'John',
    lastName: 'Doe'
  }
  today = new Date();
  longText = "Lorem ipsum dolor sit, amet , amet consectetur adipisicing elit. Laudantium omnis quam re , amet consectetur adipisicing elit. Laudantium omnis quam re consectetur adipisicing elit. Laudantium omnis quam repellat fugit culpa ipsum mollitia aliquid. Voluptates blanditiis porro tempora excepturi dicta, sed ut sunt nostrum mollitia corporis. Natus!  "

  ngOnInit() {
    this.title.toUpperCase()
  }
}
