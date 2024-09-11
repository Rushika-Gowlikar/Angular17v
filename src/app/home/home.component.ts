import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, Products } from '../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent,
    CommonModule,
    PaginatorModule,
    EditPopupComponent,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: Product[] = [];
  totalCount: number = 0;
  rows: number = 5;
  selectedProduct: Product = {
    id: 0,
    name: '',
    image: '',
    price: '',
    rating: 0,
  };
  displayEditPopup: boolean = false;
  displayAddPopup: boolean = false;
  ngOnInit(): void {
    this.getProducts(0, this.rows);
  }
  onProductOutput(val: any) {
    console.log(val);
  }

  onPageChange(event: any) {
    this.getProducts(event.page, event.perPage);
  }
  toggleEditPopup(product: Product) {
    this.selectedProduct = product;
    this.displayEditPopup = true;
  }
  toggleAddPopup() {
    this.displayAddPopup = true;
  }
  getProducts(page: number, perPage: number) {
    this.productService
      .getProduct('http://localhost:3000/clothes', { page, perPage })
      .subscribe({
        next: (data) => {
          this.products = data.items;
          this.totalCount = data.total;
        },
        error: (error) => {},
      });
  }
  editProduct(product: Product, id: number) {
    this.productService
      .editProduct(`http://localhost:3000/clothes/${id}`, product)
      .subscribe({
        next: (data) => {
          this.getProducts(0, this.rows);
        },
        error: (error) => {},
      });
  }
  onConfirmEdit(product: Product) {
    if (!this.selectedProduct.id) {
      return;
    }
    this.editProduct(product, this.selectedProduct.id);
    this.displayEditPopup = false;
  }
  onConfirmAdd(product: Product) {
    this.addProduct(product);
    this.displayAddPopup = false;
  }
  //  onProductOutput(product : Product){

  //  }
  deleteProduct(product: Product, id: number) {
    this.productService
      .deleteProduct(`http://localhost:3000/clothes/${id}`)
      .subscribe({
        next: (data) => {
          this.getProducts(0, this.rows);
        },
        error: (error) => {},
      });
  }

  addProduct(product: Product) {
    this.productService
      .deleteProduct(`http://localhost:3000/clothes`)
      .subscribe({
        next: (data) => {
          this.getProducts(0, this.rows);
        },
        error: (error) => {},
      });
  }
}
