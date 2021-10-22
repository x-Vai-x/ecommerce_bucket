import { Component, OnInit } from '@angular/core';
import { ItemQuantity, Product } from '../../../types';
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

  constructor(private productService : ProductService ) { }

  ngOnInit(): void {
	  this.products = this.productService.getProducts() 
  }

  public quantityChanged(product: Product, increase: boolean) {
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
