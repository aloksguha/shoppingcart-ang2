
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListproductComponent } from './../listproduct/listproduct.component';
import { PnfComponent } from './../pnf/pnf.component';
import { CartComponent } from './../cart/cart.component';
import { ProductDetailsComponent } from './../product-details/product-details.component';
const routes: Routes = [
  {
    path: '',
    component: ListproductComponent,
  },
  {
    path: 'product',
    component: ListproductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  { path: '**', component: PnfComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }



