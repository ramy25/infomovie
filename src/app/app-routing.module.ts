import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvsComponent } from './tvs/tvs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv', component: TvsComponent },
  { path: 'tv/:id', component: TvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
