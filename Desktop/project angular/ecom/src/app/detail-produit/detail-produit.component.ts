import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../classes/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  produit!: Produit;
  id!: number;
  constructor(public produitservice: ProduitService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produitservice.getProduitById(this.id).subscribe((data) => {
      this.produit = data;
    });
  }
  getService() {
    return this.produitservice;
  }
  x: string = "";
  y: String = "";
  checkProduit() {
    if (this.produit === undefined) {
      return true
    }
    else
      return false;
  }
  z: boolean = false;

}
