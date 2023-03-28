import { Component } from '@angular/core';
import { ProductService } from './product-service/product.service';
import { Product } from '../../assets/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data as Product[]; // use a type assertion to tell TypeScript that data is of type Product[]
      console.log(this.products);
    });
  }
}