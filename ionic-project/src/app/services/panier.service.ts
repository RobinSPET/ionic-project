import { Injectable } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  title='';
  articles=[];
  constructor() { }
  add(id:number){
    this.articles.push(id);
  }
}
