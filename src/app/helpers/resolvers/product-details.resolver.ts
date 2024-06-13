import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../interfaces/product.interface";

export const productDetailResolver: ResolveFn<any> = (route, state): Observable<Product> => {
    const service = inject(ProductService);
    const id = Number(route.params['id'])
    return service.getProductById(id)
    
}