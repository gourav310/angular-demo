import { Component } from '@angular/core';
import { Product, ProductsService } from '../product-list/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  private readonly defaultPhoneItem: Product = {
    name: '',
    description: '',
    price: 0,
    id: 0,
  };
  phoneItem: Product = {
    ...this.defaultPhoneItem,
  };
  constructor(private productService: ProductsService) {}
  onSubmit(): void {
    console.log('Your order has been submitted', this.phoneItem);
    this.productService.addProduct(this.phoneItem);
    this.phoneItem = {
      ...this.defaultPhoneItem,
    };
  }
}
