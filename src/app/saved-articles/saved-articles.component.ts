import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';

declare let $: any;

@Component({ selector: 'ht-saved-articles', templateUrl: './saved-articles.component.html', styleUrls: ['./saved-articles.component.css'] })
export class SavedArticlesComponent implements OnInit {

  articles;
  article = {};

  constructor(private httpClient: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.httpClient.get('./api/articles').subscribe(data => {
      this.articles = data;
    }, err => {
      console.log(err);
    });
  }

  deleteNote(noteId) {
    this.httpClient.delete('./api/note/' + noteId).subscribe(data => {
      // this.article.note.body = "";
    }, err => {
      console.log(err);
    });
  }

  articleNotes(article) {
    this.httpClient.get('./api/article/' + article._id).subscribe(data => {
      this.article = data;
      $('#note-modal').modal('show');
    }, err => {
      console.log(err);
    });
  }

  saveNote(articleId) {
    let note = $('#new-article-note').val();
    if (note !== '') {
      this.httpClient.post('./api/article/' + articleId, { body: note }).subscribe(data => { }, err => {
        console.log(err);
      })
    }

  }

  deleteArticle(index) {
    this.httpClient.delete('./api/article/' + this.articles[index]._id).subscribe(data => {
      this.articles.splice(index, 1);
    }, err => {
      console.log(err);
    });
  }
}
