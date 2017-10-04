import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable()
export class ProductService {
  products: Product[] = [{
    'id': '1',
    'name': 'Mobile',
    'price': 2000
  },
  {
    'id': '2',
    'name': 'Laptop Steakers',
    'price': 1000
  },
  {
    'id': '3',
    'name': 'UC Keychain',
    'price': 200
  },
  {
    'id': '4',
    'name': 'iPhone 8',
    'price': 72000
  },
  {
    'id': '5',
    'name': 'Sony BoomBox p543',
    'price': 57500
  }];
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product {
     return this.products.filter(_product => {
      if(_product.id === id) {
        return _product;
      }
    })[0];
  }
}
