import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

  getCarts(): Observable<any> {
    return this.http.get('https://dummyjson.com/carts');
  }

  getCart(cart: string) {
    const url = `https://dummyjson.com/carts/${cart}`;
    return this.http.get(url);
  }
}
