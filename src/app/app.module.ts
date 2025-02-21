import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ProductsService } from './product-list/products.service';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ListItemComponent,
    FormComponent,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.i
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
