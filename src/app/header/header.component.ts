import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  categories: MenuItem[] = []
  showingProducts: boolean = false;

  @Output() showing = new EventEmitter<string>();

  ngOnInit(): void {

    //List of menu categories 
    this.categories = [
      {
        label: "Products",
        icon: 'pi pi-tag',
        routerLink: '/products',
        //command: () => this.showProducts()
      },
      {
        label: "Users",
        icon: 'pi pi-user',
        routerLink: '/users',
        //command: () => this.showUsers()
      },
      {
        label: "Carts",
        icon: 'pi pi-shopping-cart',
        routerLink: '/carts',
        //command: () => this.showCarts()
      }
    ]
  }

  //Outputing values of clicked menu buttons 
  /*showCarts(): void {
    this.showing.emit("carts");
  }
  showUsers(): void {
    this.showing.emit("users");
  }
  showProducts(): void {
    this.showing.emit("products");
  }*/

}
