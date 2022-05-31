import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'news-latest-news-card',
  templateUrl: './latest-news-card.component.html',
  styleUrls: ['./latest-news-card.component.css'],
})
export class LatestNewsCardComponent implements OnInit {
  @Input() news!: News;

  constructor() {}

  ngOnInit(): void {}
}
