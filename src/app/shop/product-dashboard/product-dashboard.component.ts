import { AfterViewInit, Component, ElementRef, Inject, ViewChild, inject } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ProductService } from '../../helpers/services/product.service';
import { debounceTime, filter, finalize, fromEvent, map, switchMap, tap } from 'rxjs';
import { PaginationService } from '../../helpers/services/pagination.service';
import { FormControl } from '@angular/forms';
import { NotificationService } from '../../helpers/services/notification.service';
import { CartService } from '../../helpers/services/cart.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
})
export class ProductDashboardComponent implements AfterViewInit {
  productList: Product[] = [];
  openForm: boolean = false;

  disableClick = false;
  searchInput = new FormControl("")
  @ViewChild('search') search!: ElementRef<HTMLInputElement>
  constructor(
    public _productService: ProductService,
    private _paginatorService: PaginationService,
    private _notification: NotificationService,
    private _cartService: CartService
  ) {
    this._paginatorService.currentPage$.pipe(
      switchMap((page) => this._productService.getProducts(30, 30 * (page - 1)))
    ).subscribe((result) => {
      this.productList = result
    })

  }

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      map(event => (event.target as HTMLInputElement).value),
      filter(value => value.length > 2),
      switchMap(key => this._productService.searchProduct(key as string))
    ).subscribe(result => this.productList = result)
  }
  buy(id: number) {
    this._cartService.amount.update((val) => val + 1);
    this._cartService.productIds.update(ids => [...ids, id])
    console.log(this._cartService.productIds())
  }

  addProduct(newProduct: any) {
    if (this.disableClick) return
    this.disableClick = true
    this._productService.addProduct(newProduct).pipe(
      finalize(() => this.disableClick = false)
    ).subscribe(() => {
      this._notification.success('Product Added')
      // this.disableClick = false
    });

  }


}
