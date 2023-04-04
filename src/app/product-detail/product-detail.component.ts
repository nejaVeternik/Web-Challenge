import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  productId: any = '';
  product: any = {};
  rating: number = 0;
  images: string[] = [];
  currentImage: string = '';
  title: string = '';
  description: string = '';
  editing: boolean = false;
  message: any = {};
  messageShowing: boolean = false;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  setCurrentImage(image: string) {
    this.currentImage = image;
  }

  edit() {
    this.editing = true;
    this.messageShowing = false;
  }

  confirm() {
    this.editing = false;
    const data = {
      title: this.title,
      description: this.description
    }

    this.ProductsService.updateProduct(data, this.productId).subscribe((data: any) => {
      console.log(data);
    });  

    this.messageShowing = true;
    this.message = [{ severity: 'success', summary: 'PUT request for updating sent successfuly'}];
  }

  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    //Get the product 
    this.ProductsService.getProduct(this.productId).subscribe((data: any) => {
      this.product = data;
      //this.rating = Math.floor(Math.random() * (5 - 1)) + 1;
      this.rating = this.product.rating;
      this.images = data.images;
      console.log(this.images);
    });
  }

}
