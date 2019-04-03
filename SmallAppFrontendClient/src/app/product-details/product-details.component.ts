import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductService,private listComponent: ProductsListComponent) { }

  ngOnInit() {
  }
  deleteProduct(){
    this.productService.deleteProduct(this.product.nid)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error)
      );
      }
}
