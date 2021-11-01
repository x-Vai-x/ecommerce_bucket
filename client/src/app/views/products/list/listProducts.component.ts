import { Component, OnInit } from '@angular/core';
import { ItemQuantity, Product, ViewMode } from '../../../types';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './listProducts.component.html',
  styleUrls: ['./listProducts.component.css']
})
export class ListProductsComponent implements OnInit {

  public products: Observable<Product[]> = new Observable<Product[]>()
  public quantities = new Map()
  public overallQuantity: number = 0
  public viewMode: ViewMode = ViewMode.ALL

  constructor(private productService : ProductService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
	  this.products = this.productService.getProducts()
	  this.viewMode = this.route.snapshot.paramMap.get('viewmode') as ViewMode ?? ViewMode.ALL
  }

  public quantityChanged(product: ItemQuantity) {
	if(!product.quantity) {
		this.quantities.delete(product.product)
	}
	this.quantities.set(product.product, product.quantity)
  }
	
}
