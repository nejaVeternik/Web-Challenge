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
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartsComponent } from './carts/carts.component';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { GalleriaModule } from 'primeng/galleria';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OrderListModule } from 'primeng/orderlist';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
    declarations: [AppComponent, ProductsComponent, HeaderComponent, UsersComponent, UserDetailComponent, ProductDetailComponent, CartsComponent],
    imports: [
        BrowserModule, 
        BrowserAnimationsModule,
        DataViewModule,
        FormsModule,
        ButtonModule,
        HttpClientModule,
        MenuModule,
        MenubarModule,
        AppRoutingModule,
        RatingModule,
        ChipsModule,
        CommonModule,
        InputTextModule,
        CardModule,
        DividerModule,
        PanelModule,
        GalleriaModule,
        DragDropModule,
        OrderListModule,
        TableModule,
        ListboxModule,
        DropdownModule
        ],
    bootstrap: [AppComponent]
})
export class AppModule {}