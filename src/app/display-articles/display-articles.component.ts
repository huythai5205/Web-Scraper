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
    console.log('here is article in componnet', article);
    this.httpClient.post('http://localhost:3000/api/article', { article }).subscribe(data => {
      console.log("article added.");
    },
      err => {
        console.log(err);
      });
  }
}
