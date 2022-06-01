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
  toMonth: number = new Date().getMonth();
  fromMonth: number = new Date().getMonth() - 1;

  toDate: string = '6/1/2022';
  fromDate: string = '5/1/2022';

  constructor(private data: GetdataService) {}

  ngOnInit() {
    this.data
      .getNews(
        new Date(this.toDate).toISOString(),
        new Date(this.fromDate).toISOString()
      )
      .subscribe(({ articles }) => {
        console.log({ articles });
        this.latestNews = articles;
      });
  }

  previousDate() {
    this.toMonth = this.toMonth - 1;
    this.fromMonth = this.fromMonth - 1;

    this.toDate = new Date(
      new Date(this.toDate).setMonth(this.toMonth - 1)
    ).toLocaleDateString();
    this.fromDate = new Date(
      new Date(this.toDate).setMonth(this.fromMonth - 1)
    ).toLocaleDateString();
  }

  onScroll() {
    console.log('api hit');
    this.previousDate();
    this.data
      .getNews(
        new Date(this.toDate).toISOString(),
        new Date(this.fromDate).toISOString()
      )
      .subscribe(({ articles }) => {
        console.log({ articles });
        this.latestNews = [...this.latestNews, ...articles];
      });
    console.log('dnjd', this.latestNews);
  }
}
