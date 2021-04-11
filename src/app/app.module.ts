import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './brand/brand.component';
import { ColorComponent } from './color/color.component';
import { CustomerComponent } from './customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentAlComponent } from './components/rent-al/rent-al.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CategoryComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarDetailComponent,
    RentAlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
