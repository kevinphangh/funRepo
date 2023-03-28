import { Component } from '@angular/core';
import { Product } from '../../assets/products.d';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  currentPage: number = 1; 
  productsPerPage: number = 10; 
  products: Observable<Product[]> = of([]);
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