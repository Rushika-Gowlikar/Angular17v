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

  addProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.postMethod(url, body, {
      responseType: 'json',
    });
  };
  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.putMethod(url, body, {
      responseType: 'json',
    });
  };
  deleteProduct = (url: string): Observable<any> => {
    return this.apiService.deleteMethod(url, {
      responseType: 'json',
    });
  };
}
