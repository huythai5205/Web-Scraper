import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SavedArticlesComponent } from './saved-articles/saved-articles.component';
import { ScrapeNewArticlesComponent } from './scrape-new-articles/scrape-new-articles.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'saved-articles', component: SavedArticlesComponent },
  { path: 'scrape-new-articles', component: ScrapeNewArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, SavedArticlesComponent, ScrapeNewArticlesComponent];
