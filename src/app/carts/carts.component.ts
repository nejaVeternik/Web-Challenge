import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts.service';
import { UsersService } from '../services/users.service';

interface Cart {
  id: string,
  items: [],
  total: string
}

interface User {
  id: string
}

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{

  users: any[] = [];
  carts: Cart[] = [];
  userSelected: object = {};
  selectedCart: any = {};
  displaying: boolean = false;
  cartData: any[] = [];
  cartItems: any[] = [];
  selected: User = {id: ''};

  cols = [
    { field: 'name', header: 'Product Name' },
    { field: 'price', header: 'Price' },
    { field: 'quantity', header: 'Quantity' }
  ]

  constructor(private CartsService: CartsService, private UsersService: UsersService) { }

  ngOnInit(): void {
    this.UsersService.getUsersList().subscribe(data => {
      this.users = data['users'].slice(0, 20); //Limit the list to 20 because we get only 20 carts
    });

    this.CartsService.getCarts().subscribe(data => {
      this.carts = data['carts'];
    });
  }

  selectedUser(event: any) {
    this.userSelected = event.value[0];
    this.displaying = true;

    this.CartsService.getCart(event.value[0].id).subscribe((data: any) => {
      this.selectedCart = data;
      console.log(this.selectedCart);
    });

    this.cartData = [
      { id: this.selectedCart.id, total: this.selectedCart.total, userId: this.selectedCart.id }
    ]

    this.cartItems = this.selectedCart.items;

  }

  getCart(id: string): any {
    /*this.CartsService.getCartOfUser(id).subscribe(data => {
      return data;
    });*/
    const c = this.carts.find(c => c.id === id);
    this.selectedCart = c;
    return c ? c : ' ';
  }

}
