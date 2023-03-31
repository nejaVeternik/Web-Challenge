import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductsComponent } from './products/products.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataViewModule } from "primeng/dataview";

@NgModule({
    declarations: [AppComponent, ProductsComponent],
    imports: [
        BrowserModule, 
        BrowserAnimationsModule,
        DataViewModule,
        FormsModule,
        ButtonModule,
        HttpClientModule
        ],
    bootstrap: [AppComponent]
})
export class AppModule {}