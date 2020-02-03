import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '45be4f4fbf5a4186a2b4f7d744f129e4';
  constructor(private httpClient: HttpClient) { }
  public getNews(inputObj:object) {
    var queryString = Object.keys(inputObj).map(function (key) {
      return key + '=' + inputObj[key]
    }).join('&');

    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?apiKey=${this.API_KEY}&${queryString}`);
  }
}
