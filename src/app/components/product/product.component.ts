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

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, RatingModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product);
  }
}
