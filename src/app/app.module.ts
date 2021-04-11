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
import { RentalComponent } from './components/rent-al/rent-al.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { DescriptionPipe } from './pipes/description.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { LoginComponent } from './components/login/login/login.component';
import { PaymentComponent } from './components/payment/payment/payment.component';
import { AccountComponent } from './account/account/account.component';
import { FooterComponent } from './footer/footer/footer.component';
import { RegisterComponent } from './components/register/register/register.component';
import { FindexComponent } from './components/findex/findex/findex.component';
import { CarAddComponent } from './components/car/car-add/car-add/car-add.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter/car-filter.component';
import { CarImageAddComponent } from './components/car/car-image-add/car-image-add/car-image-add.component';
import { CarRentComponent } from './components/car/car-rent/car-rent/car-rent.component';
import { CarUpdateComponent } from './components/car/car-update/car-update/car-update.component';

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
    RegisterComponent,
    FindexComponent,
    CarAddComponent,
    CarFilterComponent,
    CarImageAddComponent,
    CarRentComponent,
    CarUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
