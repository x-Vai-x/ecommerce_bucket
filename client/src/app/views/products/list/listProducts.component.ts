import { Component, OnInit } from "@angular/core";
import { ItemQuantity, Product, ViewMode } from "../../../types";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../services/product.service";
import { Observable } from "rxjs";
import { Location } from '@angular/common';

@Component({
  selector: "app-list-products",
  templateUrl: "./listProducts.component.html",
  styleUrls: ["./listProducts.component.css"]
})
export class ListProductsComponent implements OnInit {

  public products: Observable<Product[]> = new Observable<Product[]>()
  public quantities = new Map()
  public overallQuantity: number = 0
  public viewMode: ViewMode = ViewMode.ALL
  public eViewMode: typeof ViewMode = ViewMode

  constructor(private productService : ProductService, private route: ActivatedRoute, private location: Location ) { }

  ngOnInit(): void {
	  this.products = this.productService.getProducts()
	  this.viewMode = this.route.snapshot.params.viewmode as ViewMode ?? ViewMode.ALL
	  const state = this.location.getState()
	  this.quantities = (state as any).quantities ?? new Map()
	  this.overallQuantity = (state as any).overallQuantity?? 0
  }

  public quantityChanged(product: ItemQuantity) {
	this.overallQuantity += (product.quantity - (this.quantities.get(product.product) ?? 0))
	if(!product.quantity) {
		this.quantities.delete(product.product)
	}
	this.quantities.set(product.product, product.quantity)
  }
	
}
