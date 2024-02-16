import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : any= [];
  productSubscription: Subscription | undefined;
  constructor( private Product : ProductService) { }

  ngOnInit(): void {
    this.Product.getAll().subscribe((data : any) => {
      this.products = data;
    })
  }
}
