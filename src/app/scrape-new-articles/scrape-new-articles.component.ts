import { Component, OnInit, AfterViewInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ht-scrape-new-articles',
  templateUrl: './scrape-new-articles.component.html',
  styleUrls: ['./scrape-new-articles.component.css']
})
export class ScrapeNewArticlesComponent implements AfterViewInit {

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit() {
    this.httpClient.get('http://localhost:3000/scrape').subscribe(data => {
      console.log(data);
    },
      err => {
        console.log(err);
      });
  }

}
