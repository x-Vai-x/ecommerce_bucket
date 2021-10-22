import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ListProductsComponent, ViewProductComponent } from './views';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ListProductsComponent,
    ViewProductComponent,
	AsyncPipe,
	CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	MatButtonModule,
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ListProductsComponent]
})
export class AppModule { }
