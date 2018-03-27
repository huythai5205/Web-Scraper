import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private articles = new BehaviorSubject<Object>(null);

  constructor() { }

  setArticles(articles) {
    this.articles.next(articles);
  }

  getArticles() {
    return this.articles;
  }
}