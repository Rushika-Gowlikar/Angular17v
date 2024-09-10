import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Pagination } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiService: ApiService) {}

  getProduct = (url: string, params: Pagination): Observable<any> => {
    return this.apiService.getMethod(url, {
      params,
      responseType: 'json',
    });
  };
}
