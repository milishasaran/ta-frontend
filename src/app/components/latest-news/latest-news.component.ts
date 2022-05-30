import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  latestNews = new Array(5).fill(1);
}
