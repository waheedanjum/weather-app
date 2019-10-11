
import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastService } from './services/weather-forecast.service';
import { FiveDayWeatherForecast, City, Temprature, Coordinate, Collections, Wind } from './interfaces/five-day-weather-forecast';
import { NgModule } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Weather Forecast ';
  weatherMapData: FiveDayWeatherForecast;

  city: City;
  coord: Coordinate;
  list: Collections;
  temprature: Temprature;
  wind: Wind;

  constructor(private http: HttpClient, private weatherService: WeatherForecastService) { }

  public ngOnInit() {
    this.showWeatherForeCast();
  }

  public showWeatherForeCast() {
    this.weatherService.getWeatherForecast().subscribe((data: any) => {
      this.city = data.city;
      this.coord = data.city.coord;
      this.list = data.list;
      this.temprature = this.list[0].main;
      this.wind = this.list[0].wind;
      
      console.log(data);

      this.testData();
    },
      err => {
        console.log('data request failed');
      }
    );
  }

  startOfWeek(date) {
    const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
   }

  public testData() {
    if (this.city) {
      console.log(this.city.name);
    }

    if (this.coord) {
       console.log(this.coord.lon);
     }

    if (this.temprature) {
       console.log(this.temprature);
     }

     if(this.wind)
     {
      console.log(this.wind);
    }
  }
}

