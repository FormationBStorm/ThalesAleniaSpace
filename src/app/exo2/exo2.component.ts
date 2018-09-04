import { Component, OnInit } from '@angular/core';
import {Produit} from '../models/produit';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {
  produits: Array<Produit>;

  constructor() { }

  ngOnInit() {
    this.produits = new Array<Produit>();

    for(let i = 0; i < 10; i++){
      let produit: Produit = <Produit>{enSolde: false, titre: "Produit"+ i, description: "Desc Produit"+ i, prix: i, qttStock: i * 10};
      this.produits.push(produit);
    }
  }

  acheter(produit: Produit) {
    if (produit.qttStock > 0)
      produit.qttStock--;
  }

  mettreEnSolde(produit: Produit) {
    if(produit.enSolde)produit.enSolde = false;
    else produit.enSolde = true;
  }
}
