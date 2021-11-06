import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ItemQuantity, Product, ViewMode } from "../../../types";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.css"]
})
export class ViewProductComponent implements OnInit {

  @Input() public product!: Product
  @Output() quantityChanged = new EventEmitter<ItemQuantity>()
  @Input() public quantity: number = 0
  @Input() public viewMode: ViewMode = ViewMode.ALL
  public eViewMode: typeof ViewMode = ViewMode

  constructor() { }

  public addToBasket() {
	  if(this.quantity < 10) {
		this.quantityChanged.emit({ product: this.product, quantity: ++this.quantity })
	  }
  }

  public removeFromBasket(all: boolean = false) {
	if (all) {
		this.quantityChanged.emit({ product: this.product, quantity: this.quantity = 0 })	
	}
	else if(this.quantity) {
		this.quantityChanged.emit({ product: this.product, quantity: --this.quantity })
	  }
  }

  public modifyQuantity(quantity: number) {
	  if(quantity && quantity < 10) {
		  this.quantityChanged.emit({ product: this.product, quantity:  this.quantity = quantity })
	  } 
  }

  ngOnInit(): void {
  }

}
