import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Weather } from 'src/app/interfaces/weather';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'news-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  news: [] | null = null;
  weather: Weather[] = [];

  constructor(private data: GetdataService, private route: Router) {}

  ngOnInit() {
    // this.data.getNews(this.fromDate, this.toDate).subscribe(({ articles }) => {
    //   console.log({ articles });
    //   this.news = articles;
    // });
    // this.data.getWeather().subscribe(({ daily }) => {
    //   console.log({ daily });
    //   this.weather = daily;
    // });
  }
}
