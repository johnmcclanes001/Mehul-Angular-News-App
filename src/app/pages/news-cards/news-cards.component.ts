import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.css']
})
export class NewsCardsComponent implements OnInit {
  @Input('category') categoryName: string;
  @Input('title') titleText: string;
  @Input('publishedDt') publishedDate: Date;
  @Input('author') authorName: string;
  @Input('url') redirectUrl: string;
  @Input('urlToImage') imageUrl: string;
  
  constructor() { }

  ngOnInit() {
  }

}
