import { Component, inject } from '@angular/core';
import { CartService } from '../../helpers/services/cart.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Product } from '../../helpers/interfaces/product.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  // providers: [CartService]
})
export class CartComponent {
  service = inject(CartService)


  products$ = this.service.getCartProducts()
// signal product-ში მოვძებნოთ კონკრტული პროდუქტი
// პროდუქტის amount შევცვალოთ
// განვაახლოთ ეს სიგნალი (პროდუქტების)
// computed სიგნალში გამოვთვალოთ ნამრავლი რაოდენობის და ფასის
  generateAmount(state: 1 | 0, product: Product) {
    const prods = this.service.cartProducts();
  //  const singleProduct =  prods.find(i => i.id === product.id);
  //  if(singleProduct) {
  //   singleProduct.amount = state === 1 ?  singleProduct.amount += 1 : singleProduct.amount -= 1
  //  }
   this.service.cartProducts.update((produdctList) => {
    const singleProduct =  produdctList.find(i => i.id === product.id);
    if(singleProduct) {
      singleProduct.amount = state === 1 ?  singleProduct.amount += 1 : singleProduct.amount -= 1
     }
     return produdctList
   })
  //  product?.amount
  //   product.amount && product.amount >= 1 ? 
  //     state === 1 ?  product.amount += 1 : product.amount -= 1
  //     : null
      
  }
}
