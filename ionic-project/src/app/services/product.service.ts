import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Produit } from 'src/app/models/produit.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productSubject = new Subject<any[]>();
  private dbPath = '/product';
  productRef: AngularFirestoreCollection<Produit>

  constructor(
    private db: AngularFirestore
  ) {
    this.productRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.productRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewProduct(product: Produit) : any {
    return new Observable(obs => {
      this.productRef.add({...product}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.productRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(product:Produit) {
    return new Observable(obs => {
      if (product.id) this.productRef.doc(product.id.toString()).update(product);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`product/${id}`).delete();
  }
}
