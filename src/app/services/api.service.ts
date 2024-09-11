import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Product } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMethod<T>(url: string, options: Options): Observable<T> {
    return this.http.get(url, options) as Observable<T>;
  }
  postMethod<T>(url: string, body:Product, options: Options): Observable<T> {
    return this.http.post(url,body,options) as Observable<T>;
  }
  putMethod<T>(url: string, body:Product, options: Options): Observable<T> {
    return this.http.put(url, body, options) as Observable<T>;
  }
  deleteMethod<T>(url: string, options: Options): Observable<T> {
    return this.http.delete(url, options) as Observable<T>;
  }
}
