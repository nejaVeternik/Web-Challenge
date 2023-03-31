import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service'
import { ProductsService } from '../services/products.service'
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';

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

  constructor(private httpService: HttpService) { }



  ngOnInit(): void {
    this.httpService.getProductList().subscribe(data => {
      this.products = data['products'];
      console.log(this.products);
    })
  }

  



  /*products: Product[] = [
    {
      title: 'prvi',
      price: 4.55,
      brand: 'Apple'
    },
    {
      title: 'drugi',
      price: 5.44,
      brand: 'Pear'
    }
  ]*/


}
