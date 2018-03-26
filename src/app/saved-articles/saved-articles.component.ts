import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';

@Component({
  selector: 'ht-saved-articles',
  templateUrl: './saved-articles.component.html',
  styleUrls: ['./saved-articles.component.css']
})
export class SavedArticlesComponent implements OnInit {

  articles;

  constructor(private httpClient: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api/articles').subscribe(data => {
      this.articles = data;
      console.log(typeof this.articles);
      console.log(this.articles);
    },
      err => {
        console.log(err);
      });
  }

  saveNotes() {

  }

  deleteArticle(article) {
    console.log(article);
    this.httpClient.delete('http://localhost:3000/api/article/' + article._id).subscribe(data => {
      console.log('article deleted');
    },
      err => {
        console.log(err);
      });
  }
}
