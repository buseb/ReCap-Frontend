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
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { DescriptionPipe } from './pipes/description.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { LoginComponent } from './components/login/login/login.component';
import { PaymentComponent } from './components/payment/payment/payment.component';
import { AccountComponent } from './account/account/account.component';
import { FooterComponent } from './footer/footer/footer.component';
import { RegisterComponent } from './components/register/register/register.component';

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
    RentAlComponent,
    VatAddedPipe,
    DescriptionPipe,
    FilterBrandPipe,
    FilterColorPipe,
    LoginComponent,
    PaymentComponent,
    AccountComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
