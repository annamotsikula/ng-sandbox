import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: Product[] = [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/4/1.jpg",
        "https://cdn.dummyjson.com/product-images/4/2.jpg",
        "https://cdn.dummyjson.com/product-images/4/3.jpg",
        "https://cdn.dummyjson.com/product-images/4/4.jpg",
        "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "title": "Flying Wooden Bird",
      "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      "price": 51,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 17,
      "brand": "Flying Wooden",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/27/1.jpg",
        "https://cdn.dummyjson.com/product-images/27/2.jpg",
        "https://cdn.dummyjson.com/product-images/27/3.jpg",
        "https://cdn.dummyjson.com/product-images/27/4.jpg",
        "https://cdn.dummyjson.com/product-images/27/thumbnail.webp"
      ]
    },
    {
      "id": 6,
      "title": "cereals muesli fruit nuts",
      "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      "price": 46,
      "discountPercentage": 16.8,
      "rating": 4.94,
      "stock": 113,
      "brand": "fauji",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/24/1.jpg",
        "https://cdn.dummyjson.com/product-images/24/2.jpg",
        "https://cdn.dummyjson.com/product-images/24/3.jpg",
        "https://cdn.dummyjson.com/product-images/24/4.jpg",
        "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
      ]
    },
  ]


  constructor() {
    console.log('Product Service')
  }

  addProduct(item: {title: string, price: number, category: string, description: string}) {
    const product: Product = {
      ...item,
      id: this.productList.length + 1,
      stock: 100,
      rating: 5,
      thumbnail: "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
    }
    this.productList.push(product)
  }

  getProducts() {
    return this.productList
  }

}
