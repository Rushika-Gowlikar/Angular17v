import {
  Component,
  Input,
  OnInit,
  Output,
  Pipe,
  EventEmitter,
} from '@angular/core';
import { Product } from '../../types';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, RatingModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {}
  editProduct() {
    this.edit.emit(this.product);
  }
  deleteProduct() {
    this.delete.emit(this.product);
  }
}
