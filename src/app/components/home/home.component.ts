import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'news-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  news: {} | null = null;
  weather: {} | null = null;

  constructor(private data: GetdataService, private route: Router) {}

  ngOnInit() {
    this.data.getNews().subscribe((news) => {
      this.news = news;
    });

    this.data.getWeather().subscribe((weather) => {
      this.weather = weather;
    });
  }

  logout() {
    window.sessionStorage.removeItem('access-token');
    this.route.navigateByUrl('/home');
  }

  onScroll() {}
}
