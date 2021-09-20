import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { TvComponent } from './tv/tv.component';
import { CastSliderComponent } from './cast-slider/cast-slider.component';
import { RecommendationsSliderComponent } from './recommendations-slider/recommendations-slider.component';
import { MoviesComponent } from './movies/movies.component';
import { TvsComponent } from './tvs/tvs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    MovieComponent,
    HomeComponent,
    TopBarComponent,
    MovieCardComponent,
    TrendingMoviesComponent,
    TvComponent,
    CastSliderComponent,
    RecommendationsSliderComponent,
    MoviesComponent,
    TvsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
