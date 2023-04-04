import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
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
        routerLink: '/products'
      },
      {
        label: "Users",
        icon: 'pi pi-user',
        routerLink: '/users'
      },
      {
        label: "Carts",
        icon: 'pi pi-shopping-cart',
        routerLink: '/carts'
      },
      {
        label: "Add new",
        icon: 'pi pi-plus',
        items: [
          {
            label: "Product",
            routerLink: '/new-product'
          },
          {
            label: "User",
            routerLink: '/new-user'
          }
        ]
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
