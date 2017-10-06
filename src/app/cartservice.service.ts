import { Injectable } from '@angular/core';
import {Product} from './product';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class Cartservice {
  products: any[] = [];
  cartTotal: number = 0;

  constructor() { }
  productSubject = new Subject<any>();
  productsObservable = this.productSubject.asObservable();

  addProduct(product: Product, qty: number) {
    let isExist = false;
    this.cartTotal += (product.price * qty);
    this.products = this.products.map(_product => {
      console.log(_product);
      if (_product.product.id === product.id) {
          _product.quantity += qty;
          isExist = true;
      }
      return _product;
    });

    if (!isExist ) {
      this.products.push({
        product: product,
        quantity: qty
       });
    }
    console.log(JSON.stringify({ products: this.products, cartTotal: this.cartTotal }));
    this.productSubject.next({ products: this.products, cartTotal: this.cartTotal });
  }

  editProduct(_product: Product, qty: number) {
    this.products = this.products.filter(_pro => {
      if (_pro.product.id !== _product.id) {
        return _pro;
      }
    });
    this.cartTotal -= (_product.price * qty);
    if (qty > 0) {
      this.addProduct(_product, qty);
      this.cartTotal += (_product.price * qty);
    }
    this.productSubject.next({ products: this.products, cartTotal: this.cartTotal });
  }

  deleteProductFromCart(_product: Product, qty: number) {
    this.products = this.products.filter(_pro => {
      if (_pro.product.id !== _product.id) {
        return _pro;
      }
    });
    this.cartTotal -= (_product.price * qty);
    this.productSubject.next({ products: this.products, cartTotal: this.cartTotal });
  }

  flushCart() {
    this.products = [];
    this.cartTotal= 0;
    this.productSubject.next({ products: this.products, cartTotal: this.cartTotal });
  }
}
