import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private articles = new BehaviorSubject<Object>(null);
  private savedArticles = new BehaviorSubject<Object>(null);

  constructor() { }

  setArticles(articles) {
    this.articles.next(articles);
  }

  getArticles() {
    return this.articles;
  }

  setSavedArticles(articles) {
    this.savedArticles.next(articles);
  }

  getSavedArticles() {
    return this.savedArticles;
  }
}
