import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  constructor(private http: HttpClient) {}

  getNews(to: string, from: string) {
    return this.http.get<any>('http://localhost:3000/news', {
      params: {
        to,
        from,
      },
    });
  }

  getWeather() {
    return this.http.get<any>('http://localhost:3000/weather');
  }
}
