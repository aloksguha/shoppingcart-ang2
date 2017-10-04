import { Component, OnInit, Input } from '@angular/core';
import { Cartservice } from './../cartservice.service';
import { DialogOverviewExampleDialogComponent } from './../product/product.component';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  @Input() cartproduct: any;
  constructor(private cartservice: Cartservice, public dialog: MdDialog, public snackBar: MdSnackBar) {
    console.log(this.cartproduct);
  }

  ngOnInit() {
  }

  deleteProductFromCart() {
    if (confirm('Are You Sure ? You can edit quantity(s) as well..')) {
      this.cartservice.deleteProductFromCart(this.cartproduct.product, this.cartproduct.quantity);
    }
  }

  editCartProduct() {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '300px',
      data: { product: this.cartproduct.product }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.action !== 'userclosed') {
        this.cartservice.editProduct(this.cartproduct.product, result.result);
      }
    });
  }

}
