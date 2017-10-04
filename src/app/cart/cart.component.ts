import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Cartservice } from './../cartservice.service';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy {
  cartProducts: any[];
  cartTotal: number = 0;
  private subscription: ISubscription;

  constructor(private cartservice: Cartservice, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    console.log(this.cartservice.products);
    this.cartProducts = this.cartservice.products;
    this.cartTotal = this.cartservice.cartTotal;
  }

  ngOnInit() {
    this.subscription = this.cartservice.productsObservable.subscribe(cart => {
      this.cartProducts = cart.products;
      this.cartTotal = cart.cartTotal;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkout(): void {
    alert('Thanks :)');
    this.cartservice.flushCart();
    this.router.navigateByUrl('/');
  }

}

