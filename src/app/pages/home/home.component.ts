import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsUrl: string;
  category : string;
  desciption : string;
  articles: Array<object>;
  rowDiv: string;
  closeDiv: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.category = "Technology"; 
    this.desciption = "Created face stars sixth forth fow Earth firmament meat";
    this.newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=45be4f4fbf5a4186a2b4f7d744f129e4";
    this.rowDiv = '<div class="row">';
    this.closeDiv = '</div>';

    let inputObj = { country: "in", category: 'technology', pageSize:50}
    this.apiService.getNews(inputObj).subscribe((data) => {
      console.log(data);
      this.articles = [];
      if (data['status'] == 'ok')
      {
        this.articles = data['articles'];
      }      
    });
  }

}
