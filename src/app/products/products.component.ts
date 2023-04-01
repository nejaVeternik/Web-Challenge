import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

interface Product {
  title: string;
  price: number;
  brand: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: any[] = [];
  isShowing: boolean = true;

  myName:string = 'a';

  categories: string[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getProductList().subscribe(data => {
      this.products = data['products'];
      console.log(this.products);
    })

  }

}
