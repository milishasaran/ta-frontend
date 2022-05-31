import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'news-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
  latestNews: News[] = [];
  constructor(private data: GetdataService) {}

  ngOnInit() {
    this.data.getNews().subscribe(({ articles }) => {
      console.log({ articles });
      this.latestNews = articles;
    });
  }
}
