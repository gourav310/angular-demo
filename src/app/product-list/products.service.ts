import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
    },
  ];
  get getAllProducts(): Product[] {
    return this.products;
  }
  addProduct(product: Product): void {
    const temp = { ...product };
    temp.id = this.products.length + 1;
    this.products.push(temp);
  }
}
