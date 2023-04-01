import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  categories: MenuItem[] = []

  ngOnInit(): void {

    this.categories = [
      {
        label: "Products",
        icon: 'pi pi-tag',
        command: () => this.showProducts()
      },
      {
        label: "Users",
        icon: 'pi pi-user',
        command: () => this.showUsers()
      },
      {
        label: "Carts",
        icon: 'pi pi-shopping-cart',
        command: () => this.showCarts()
      }
    ]
  }
  showCarts(): string {
    return "carts";
  }
  showUsers(): string {
    return "users";
  }
  showProducts(): string {
    return "products";
  }

}
