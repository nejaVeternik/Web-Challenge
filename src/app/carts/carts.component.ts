import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{

  users: any[] = [];
  carts: any[] = [];
  userSelected: object = {};
  selectedCart: any = {};
  displaying: boolean = false;
  cartData: any[] = [];
  cartItems: any[] = [];

  cols = [
    { field: 'name', header: 'Product Name' },
    { field: 'price', header: 'Price' },
    { field: 'quantity', header: 'Quantity' }
  ]

  constructor(private CartsService: CartsService, private UsersService: UsersService) { }

  ngOnInit(): void {
    this.UsersService.getUsersList().subscribe(data => {
      this.users = data['users'];
    });

    this.CartsService.getCarts().subscribe(data => {
      this.carts = data['carts'];
    });
  }

  selectedUser(event: any) {
    this.userSelected = event.value[0];
    this.displaying = true;

    this.CartsService.getCart(event.value[0].id).subscribe(data => {
      this.selectedCart = data;
      console.log(this.selectedCart);
    });

    this.cartData = [
      { id: this.selectedCart.id, total: this.selectedCart.total, userId: this.selectedCart.userId }
    ]

    this.cartItems = this.selectedCart.products;

  }
}
