import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { ListProductsComponent, ViewProductComponent } from "./views";
import { AsyncPipe, CurrencyPipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { NumberRangePipe } from './pipes/number-range.pipe';


@NgModule({
  declarations: [
	AppComponent,
    ListProductsComponent,
    ViewProductComponent,
	NumberRangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	MatButtonModule,
	BrowserAnimationsModule,
	MatSelectModule
  ],
  providers: [AsyncPipe, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
