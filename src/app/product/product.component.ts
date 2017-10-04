import { Component, OnInit, Input, Inject } from '@angular/core';
import { Product } from '../product';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Cartservice } from './../cartservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor(public dialog: MdDialog, private cartservice: Cartservice, public snackBar: MdSnackBar) { }

  ngOnInit() {
    console.log(this.product);
  }

  addToCart(): void {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
        width: '300px',
        data: { product : this.product}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result.result > 0) {
          this.openSnackBar(result.result);
          this.cartservice.addProduct(this.product, result.result);
        }
      });
    }

    quickaddToCart(): void {
      this.openSnackBar(1);
      this.cartservice.addProduct(this.product, 1);
    }

    openSnackBar(qty: number) {
      this.snackBar.open(qty + ' quantity(s) of ' + this.product.name + ' added to cart', 'X', {duration: 3000});
    }
}




@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product.component.add.html'
})
export class DialogOverviewExampleDialogComponent {
  qty: number;
  constructor(
    public dialogRef: MdDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
      this.qty = 1;
      console.log(data);
     }

  onAdd(): void{
    this.dialogRef.close({'result': this.qty, 'action': 'userinputs'});
  }
  onNoClick(): void {
    this.dialogRef.close({'result': 0, 'action': 'userclosed'});
  }

}

