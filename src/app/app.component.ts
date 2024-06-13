import { Component } from "@angular/core";
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // productList = [
  //   {id: 0, title: 'Phone'},
  //   {id: 1, title: 'Book'},
  // ]

  // productIdSold = new Subject<boolean>();

  // discountPrice: BehaviorSubject<number> = new BehaviorSubject(0);
  // discountObs$ = this.discountPrice.asObservable();

  // addedProducts = new ReplaySubject(3);
  // addedProdObs$ = this.addedProducts.asObservable();

  // constructor() {
  //   this.addedProducts.next(1);
  //   this.addedProducts.next(2);
  //   this.addedProducts.next(3);
  //   // this.addedProducts.next('Any string');
  //   // this.addedProducts.asObservable().subscribe(result => {
  //   //   console.log(result)
  //   // })

  //   this.productIdSold.asObservable().subscribe(console.log)

    
  // }

  // setPrice() {
  //   this.productIdSold.next(true)
  //   this.discountPrice.next(1000);
  //   this.addedProducts.next('Product Added');
  //   this.addedProducts.next(4);
  //   this.addedProducts.next(5);
  //   this.addedProducts.next(6);
  // }

  // getPrice() {
  //   const discountObs$ = this.discountPrice.asObservable();

  //   discountObs$.pipe().subscribe((res) => {
  //     console.log(res)
  //   })
  // }

}
