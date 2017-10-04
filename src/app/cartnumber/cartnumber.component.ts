import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Cartservice } from './../cartservice.service';

@Component({
  selector: 'app-cartnumber',
  templateUrl: './cartnumber.component.html',
  styleUrls: ['./cartnumber.component.css']
})
export class CartnumberComponent implements OnInit, OnDestroy {
  numOfProducts: number = 0;
  constructor(private changeDetectorRef: ChangeDetectorRef, private cartservice: Cartservice) { }

  ngOnInit() {
    this.cartservice.productsObservable.subscribe(cart => {
      // let cart = JSON.parse(data);
      this.numOfProducts = cart.products.reduce((qty, product) => {
        qty += product.quantity;
        return qty;
      }, 0);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.changeDetectorRef.detach();
  }

}
