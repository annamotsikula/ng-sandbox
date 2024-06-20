import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, computed, inject, signal } from "@angular/core";
import { BASE_URL } from "../contstants/contstants";
import { Observable, forkJoin, map, tap } from "rxjs";
import { ProductService } from "./product.service";
import { Product } from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    amount = signal(0);

    productIds = signal<number[]>([]);
    cartProducts = signal<Product[]>([]);
    productService = inject(ProductService);


    checkoutProducts = computed(() => {
        const cartProducts = this.cartProducts();
        console.log(cartProducts)
        return cartProducts.reduce((acc, next) => acc + next.price * next.amount, 0)

    });


    constructor(private _http: HttpClient, @Inject(BASE_URL) private _apiUrl: string) {
    }

    getCartProducts(): Observable<Product[]> {
        const cartProducts = this.productIds();
        const list$ = cartProducts.map(i => this.productService.getProductById(i) )
        return forkJoin(list$).pipe(
            map(response => response.map(prods => ({...prods, amount: 1}))),
            tap(response => this.cartProducts.set(response))

        )
    }

    // getSingleCart(id: number) {
    //     return this._http.get(`${this._apiUrl}/cart/${id}`)

    // }
}