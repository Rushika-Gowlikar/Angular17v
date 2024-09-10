import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, Products } from '../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  totalCount: number = 0;
  rows: number = 5;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts(0, this.rows);
  }
  onProductOutput(val: any) {
    console.log(val);
  }

  onPageChange(event: any) {
    this.getProducts(event.page, event.perPage);
  }

  getProducts(page: number, perPage: number) {
    this.productService
      .getProduct('http://localhost:3000/clothes', { page, perPage })
      .subscribe((products: Products) => {
        this.products = products.items;
        this.totalCount = products.total;
      });
  }
}
