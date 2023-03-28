import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <-- import HttpClient
import { Observable } from 'rxjs';
import { Product } from '../../../assets/products'; // <-- import Product interface

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = './assets/products.json'; // URL to web api

  constructor(private http: HttpClient) {} // <-- inject HttpClient

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}