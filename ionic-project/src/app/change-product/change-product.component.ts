import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.scss']
})
export class ChangeProductComponent implements OnInit {
  produit: any;
  change: boolean = false;

  constructor(
    private product: ProductService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.product.get(id).subscribe((value : any) => {
      this.produit = value;
    })
  }

  modif() {
    this.product.update(this.produit).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    });
  }
}
