import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { DataService } from './data.service';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web Scraper';

  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.router.navigate(['display-articles']);
  }

  scrapeArticles() {
    this.httpClient.get('http://localhost:3000/api/scrape').subscribe(data => {
      this.dataService.setArticles(data);
      $('.modal').modal('show');
      this.router.navigate(['display-articles']);
    },
      err => {
        console.log(err);
      });
  }

}

