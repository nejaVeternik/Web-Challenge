import { Injectable } from '@angular/core';
import { HttpService } from './http.service'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: any[] = [];

  constructor(private http: HttpClient) {

}
}