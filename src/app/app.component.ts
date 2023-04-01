import { Component } from "@angular/core";
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    showHomePage = true;
    showAboutPage = false;
    showContactPage = false;
}