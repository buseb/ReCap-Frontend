import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  dataLoaded=false
  carDetails:CarDetailDto[]=[];

  constructor(private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
      }
    })
  }
  getCarDetails(carId:number)
  {
    this.carDetailService.getCarDetails(carId).subscribe(response => {
      this.carDetails = response.data;
      this.dataLoaded=true;
      console.log(response);
    })
  }

}