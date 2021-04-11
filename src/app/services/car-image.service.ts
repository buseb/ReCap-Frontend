import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44304/api/"
  constructor(private httpClient:HttpClient) { }

  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getimagesbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
