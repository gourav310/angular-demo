import { Component } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  products = [...products];
}
