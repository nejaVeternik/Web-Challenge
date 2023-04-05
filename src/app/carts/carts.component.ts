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
  cartData: any[] = [];
  cartItems: any[] = [];
  selected: User = {id: ''};
  showing: boolean = false;
  message: any = {};
  messageShowing: boolean = false;

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

  getCart(id: string): any {
    /*this.CartsService.getCartOfUser(id).subscribe(data => {
      return data;
    });*/
    const c = this.carts.find(c => c.id === id);
    this.selectedCart = c;
    return c ? c : ' ';
  }

  remove() {
    this.CartsService.updateCart(this.selectedCart.id).subscribe(data => {
      console.log(data);
    });
    this.message = [{ severity: 'error', summary: 'DELETE request for deleting sent successfuly'}];
    this.messageShowing = true;
  }

  change() {
    this.showing = true;
    this.messageShowing = false;
  }

}
