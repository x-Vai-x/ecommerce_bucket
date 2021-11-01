import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Product } from "../types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
	return this.http.get("/products") as Observable<Product[]>
  }
}
