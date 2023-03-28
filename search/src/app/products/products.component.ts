import { Component } from '@angular/core';
import { Product } from '../../assets/products.d';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products: Observable<Product[]>;
  searchText: string = '';

  constructor(private http: HttpClient) {
    this.products = this.http.get<any>('assets/products.json')
      .pipe(
        map(data => data.content)
      );
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}