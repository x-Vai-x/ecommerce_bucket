import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../types';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  @Input() public product: Product | undefined = undefined
  @Output() quantityIncreased = new EventEmitter<Product>(); 
  @Output() quantityDecreased = new EventEmitter<Product>(); 
  @Input() public quantity: number = 0

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

  ngOnInit(): void {
  }

}
