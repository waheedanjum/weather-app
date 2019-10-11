import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FiveDayWeatherForecast } from '../interfaces/five-day-weather-forecast';

@Injectable({
  providedIn: 'root'
})

export class WeatherForecastService {
    private readonly API_URL = 'https://api.openweathermap.org/data/2.5/forecast?' +
    'q=Glasgow,uk&units=metric&APPID=f5f12545e45bb85ad0c71cc2df90c1dd';

   constructor(private http: HttpClient) { }


  public getWeatherForecast(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}


