import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() product ?: Produit;
  
  constructor( public Product : ProductService ) { }

  ngOnInit(): void {
    
  }

  addToCart(){
    if(this.product) alert(this.product.title + ' a été ajouté au panier')
  }

  deleteProduct(){
    if (this.product) this.Product.delete(this.product.id);
  }
}
