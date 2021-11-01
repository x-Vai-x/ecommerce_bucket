import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ListProductsComponent, ViewProductComponent } from './views';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ListProductsComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	MatButtonModule,
	BrowserAnimationsModule,
	MatSelectModule

  ],
  providers: [AsyncPipe,CurrencyPipe],
  bootstrap: [ListProductsComponent]
})
export class AppModule { }
