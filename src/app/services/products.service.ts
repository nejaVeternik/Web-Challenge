import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  //All API calls for products
  getProductList(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  getProduct(product: string) {
    const url = `https://dummyjson.com/products/${product}`;
    return this.http.get(url);
  }

  searchProducts(product: string) {
    const url = `https://dummyjson.com/products/search?q=${product}`;
    return this.http.get(url);
  }
  
  LimitAndSkipProducts(limit: string, skip: string, select: string) {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`;
    return this.http.get(url);
  }

  getCategories() {
    const url = `https://dummyjson.com/products/categories`;
    return this.http.get(url);
  }

  getProductsOfCategory(category: string) {
    const url = `https://dummyjson.com/products/category/${category}`;
    return this.http.get(url);
  }

  addProduct(postData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('https://dummyjson.com/products/add', postData, httpOptions)
  }

  updateProduct(postData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('https://dummyjson.com/products/add', postData, httpOptions)
  }

  deleteProduct(product: string) {
    const url = `https://dummyjson.com/products/${product}`;
    return this.http.delete(url);
  }

  //addProduct(title: string, price: number, brand: string, description: string) {}

}
