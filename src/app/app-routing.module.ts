import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DisplayArticlesComponent } from './display-articles/display-articles.component';
import { SavedArticlesComponent } from './saved-articles/saved-articles.component';

const routes: Routes = [
    { path: 'display-articles', component: DisplayArticlesComponent },
    { path: 'saved-articles', component: SavedArticlesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [DisplayArticlesComponent, SavedArticlesComponent];
