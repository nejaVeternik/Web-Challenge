import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ProductsService } from '../services/products.service';

interface Product {
  title: string;
  price: number;
  brand: string;
}

interface Category {
  name: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: any[] = [];
  categories: any[] = [];
  filtered: any[] = [];
  searchQuery = " ";
  selectedCategory: string = "";

  constructor(private ProductsService: ProductsService) {
    //this.products = this.ProductsService.allProducts;
  }

  search() {
    this.ProductsService.searchProducts(this.searchQuery).subscribe((data: any) =>{
      this.filtered = data['products'];
      console.log(this.selectedCategory);
    });
  }

  refresh(event: any) {
    this.ProductsService.getProductsOfCategory(this.selectedCategory).subscribe((data: any) =>{
      this.filtered = data['products'];
    });
  }

  ngOnInit(): void {

    //Get all products 
    this.ProductsService.LimitAndSkipProducts('100', '', '').subscribe((data: any) => {
      this.filtered = data['products'];
    });

    this.ProductsService.getCategories().subscribe((data: any) => {
      this.categories = data;
    })

    /*this.ProductsService.LimitAndSkipProducts('200', '', '').subscribe(data => {
      console.log(data);
      this.products = data['products'];
    })*/

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
