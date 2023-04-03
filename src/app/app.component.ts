import { Component } from "@angular/core";
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    showProducts: boolean = false;
    showUsers: boolean = false;
    showCarts: boolean = false;
    showUserDetail: boolean = false;
    id: number = 0;

    //Switching values to determine which component should be showing
    showingComponent(value: string): void {
        if (value == 'products') {
            this.showProducts = true;
            this.showCarts = false;
            this.showUsers = false;
            this.showUserDetail = false;
        }
        if (value == 'users') {
            this.showUsers = true;
            this.showProducts = false;
            this.showCarts = false;
            this.showUserDetail = false;
        }
        if (value == 'carts') {
            this.showCarts = true;
            this.showProducts = false;
            this.showUsers = false;
            this.showUserDetail = false;
        }
    }
    
    showingUser(userid: number): void {
        this.showUserDetail = true;
        this.showProducts = false;
        this.showUsers = false;
        this.showCarts = false;
        this.id = userid;
    }
}