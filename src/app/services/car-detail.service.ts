import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = 'https://localhost:44367/api/';
  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}