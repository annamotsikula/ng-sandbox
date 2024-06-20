import { Inject, Injectable } from '@angular/core';
import { InitialProductList, Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../contstants/contstants';
import { Observable, delay, map, tap } from 'rxjs';
import { PaginationService } from './pagination.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http: HttpClient, @Inject(BASE_URL) private _baseUrl: string, private _paginator: PaginationService) {}

  addProduct(item: {title: string, price: number, category: string, description: string}) {
    const product = {
      ...item,
      // id: this.productList.length + 1,
      stock: 100,
      rating: 5,
      thumbnail: "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
    }
    return this._http.post(`${this._baseUrl}/products/add`, { title: product.title})
    // this.productList.push(product)
  }

  getProducts(limit = 30, skip = 0 ): Observable<Product[]> {
    return this._http.get<InitialProductList>(`${this._baseUrl}/products?limit=${limit}&skip=${skip}`).pipe(
      tap(result => this._setPagination(result.total, limit)),
      map(response => response.products.map(prods => ({...prods, amount: 1})))
    )
  }

  deleteItemById(id: number ) {
    // const index = this.productList.findIndex(i => i.id === id);

    // if(index !== -1) {
    //   this.productList.splice(index, 1);
    // }


  }
  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${this._baseUrl}/products/${id}`)
  }
  searchProduct(searchKey: string) {
    return this._http.get<InitialProductList>(`${this._baseUrl}/products/search?q=${searchKey}`).pipe(
      tap(result => this._setPagination(result.total, 30)),
      map(response => response.products)
    )
  }

  private _setPagination(totalProuducts:number, displayAmont: number) {
    const pageAmount = Math.ceil(totalProuducts / displayAmont);
    this._paginator.setAllPages(pageAmount);
  }

}
