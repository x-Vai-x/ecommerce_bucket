import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemQuantity, Product, ViewMode } from '../../../types';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  @Input() public product!: Product
  @Output() quantityIncreased = new EventEmitter<Product>() 
  @Output() quantityDecreased = new EventEmitter<Product>()
  @Output() quantityChanged = new EventEmitter<ItemQuantity>()
  @Input() public quantity: number = 0
  @Input() public viewMode: ViewMode = ViewMode.ALL

  constructor() { }

  public addToBasket() {
	  if(this.quantity < 10) {
		this.quantityIncreased.emit(this.product)
	  }
  }

  public removeFromBasket() {
	  if(this.quantity) {
		  this.quantityDecreased.emit(this.product)
	  }
  }

  public modifyQuantity() {
	  if(this.quantity && this.quantity < 10) {
		  this.quantityChanged.emit({ product: this.product, quantity: this.quantity })
	  } 
  }

  ngOnInit(): void {
  }

}
