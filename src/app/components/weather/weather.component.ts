import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'news-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: Weather[] = [];

  constructor(private data: GetdataService) {}

  ngOnInit() {
    this.data.getWeather().subscribe(({ daily }) => {
      console.log({ daily });
      this.weather = daily;
      console.log(this.weather);
    });
  }
}
