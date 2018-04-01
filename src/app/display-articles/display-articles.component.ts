import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';

@Component({
  selector: 'ht-display-articles',
  templateUrl: './display-articles.component.html',
  styleUrls: ['./display-articles.component.css']
})
export class DisplayArticlesComponent implements OnInit {

  articles;


  constructor(private httpClient: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  saveArticle(article) {
    this.httpClient.post('./api/article', { article }).subscribe(data => { },
      err => {
        console.log(err);
      });
  }
}
