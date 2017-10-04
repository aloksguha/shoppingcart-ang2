import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product-service.service';
import { Product } from './../product';
import { DialogOverviewExampleDialogComponent } from './../product/product.component';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Cartservice } from './../cartservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: Product;
  id: string;
  private sub: any;
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    public dialog: MdDialog, private cartservice: Cartservice, public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.product = this.productService.getProduct(this.id);
    });
  }

  quickaddToCart(): void {
    this.openSnackBar(1);
    this.cartservice.addProduct(this.product, 1);
  }

  addToCart(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '300px',
      data: { product: this.product }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.result > 0) {
        this.openSnackBar(result.result);
        this.cartservice.addProduct(this.product, result.result);
      }
    });
  }

  openSnackBar(qty: number) {
    this.snackBar.open(qty + ' quantity(s) of ' + this.product.name + ' added to cart', 'X', { duration: 3000 });
  }

}
