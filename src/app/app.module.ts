import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModules } from './material-modules/material.module';
import { AppComponent } from './app.component';
import { ProductService } from './product-service.service';
import { Cartservice } from './cartservice.service';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductComponent, DialogOverviewExampleDialogComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CartnumberComponent } from './cartnumber/cartnumber.component';
import {AppRoutingModule} from './routing/routing.module';
import { PnfComponent } from './pnf/pnf.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListproductComponent,
    ProductComponent,
    DialogOverviewExampleDialogComponent,
    CartComponent,
    CartnumberComponent,
    PnfComponent,
    CartDetailComponent,
    ProductDetailsComponent
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule,
    MaterialModules,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ProductService, Cartservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
