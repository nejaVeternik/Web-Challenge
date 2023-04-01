import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductsComponent } from './products/products.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataViewModule } from 'primeng/dataview';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    declarations: [AppComponent, ProductsComponent, HeaderComponent],
    imports: [
        BrowserModule, 
        BrowserAnimationsModule,
        DataViewModule,
        FormsModule,
        ButtonModule,
        HttpClientModule,
        MenuModule,
        MenubarModule
        ],
    bootstrap: [AppComponent]
})
export class AppModule {}