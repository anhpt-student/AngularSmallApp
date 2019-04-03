import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    product: Observable<Product[]>
    constructor(private productService: ProductService){}
  ngOnInit(){
    this.reloadData();
  }
  reloadData(){
    this.product = this.productService.viewProductList();
  }
}
