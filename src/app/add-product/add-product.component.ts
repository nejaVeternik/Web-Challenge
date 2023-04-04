import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  title: string = "";
  brand: string = "";
  price: number = 0;
  description: string = "";
  message: any = {};

  constructor(private ProductsService: ProductsService) { }

  submitFrom() {
    const data = {
      title: this.title,
      brand: this.brand,
      price: this.price,
      description: this.description
    }

    this.ProductsService.addProduct(data).subscribe(data => {
      this.message = [{ severity: 'success', summary: 'Product added successfuly'}];
      console.log(data);
    })

    this.title = "";
    this.brand = "";
    this.price = 0;
    this.description = "";
  }

  ngOnInit(): void {
    //this.message = [{ severity: 'success', summary: 'success', detail: 'aa'}];
  }
}
