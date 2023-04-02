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

  categories: string[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    this.httpService.getProductList().subscribe(data => {
      this.products = data['products'];
      console.log(this.products);
    });

    /*this.httpService.getProduct('2').subscribe(data => {
      console.log(data);
    })

    this.httpService.searchProducts('phone').subscribe(data => {
      console.log(data);
    })

    this.httpService.LimitAndSkipProducts('10', '10', '').subscribe(data => {
      console.log(data);
    })

    this.httpService.getCategories().subscribe(data => {
      console.log(data);
    })

    const postData = JSON.stringify({
      title: 'BMW Pencil'
    })

    this.httpService.addProduct(postData).subscribe(data => {
      console.log(data);
    });

    const postData = JSON.stringify({
      title: 'BMW'
    })

    this.httpService.updateProduct(postData).subscribe(data => {
      console.log(data);
    })

    this.httpService.deleteProduct('2').subscribe(data => {
      console.log(data);
    });*/

  }

}
