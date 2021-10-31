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

  public quantityChanged(product: Product | ItemQuantity, increase?: boolean) {
	if('product' in product && 'quantity' in product) {
		this.quantities.set(product.product, product.quantity)
	} else {
		if(this.quantities.has(product)) {
			const quantity = this.quantities.get(product)
			if(increase) {
				this.quantities.set(product, quantity + 1)
				this.overallQuantity++
			} else {
				this.quantities.set(product,quantity - 1)
				this.overallQuantity--
			}
		}
		else if (increase) {
			this.quantities.set(product, 1)
			this.overallQuantity++
		}
	}
	
  }
}
