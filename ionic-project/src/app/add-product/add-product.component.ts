import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public product !:Produit;

  constructor(
    private Product: ProductService
  ) {}

  ngOnInit() : void {
    this.product = new Produit();
  }

  add() {
    this.Product.saveNewProduct(this.product).subscribe(() => {
      this.product = new Produit();
    })
  }
}
