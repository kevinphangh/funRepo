import { Component } from '@angular/core';
import { Product } from '../../assets/products.d';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
  firstSearch: boolean = true;

  constructor(private http: HttpClient) {
  }

  onSearchTextEntered(searchValue: string) {
    if (this.firstSearch) {
      this.products = this.http.get<any>('assets/products.json')
        .pipe(
          map(data => data.content)
        );
      this.firstSearch = false;
    }
    this.currentPage = 1;
    this.searchText = searchValue;
  }

  filteredAndSlicedProducts(products: Product[]): Product[] {
    const filteredProducts = products.filter(product =>
      this.searchText === '' || product.title.toLowerCase().includes(this.searchText)
    );
    return filteredProducts.slice(
      (this.currentPage - 1) * this.productsPerPage,
      this.currentPage * this.productsPerPage
    );
  }

  getTotalPages(products: Product[]): number {
    const filteredProducts = products.filter(product =>
      this.searchText === '' || product.title.toLowerCase().includes(this.searchText)
    );
    let totalPages: number = Math.ceil(filteredProducts.length / this.productsPerPage);
    if(totalPages > 0) return totalPages
    return 1; 
  }
    

  goToPage(page: number) {
    this.currentPage = page;
  }
}