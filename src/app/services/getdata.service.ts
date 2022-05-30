import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<any>('http://localhost:3000/news');
  }

  getWeather() {
    return this.http.get<any>('http://localhost:3000/weather');
  }
}
