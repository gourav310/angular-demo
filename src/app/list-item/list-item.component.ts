import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductsService } from '../product-list/products.service';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() index!: number;
  @Output() selectedIdxChange = new EventEmitter<number>();
  products = inject(ProductsService).getAllProducts;

  selectedIdxHandler(idx: number) {
    this.selectedIdxChange.emit(idx);
  }
}
