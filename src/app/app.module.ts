import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieService } from './services/movie.service';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { SerieComponent } from './components/serie/serie.component';
import { SerieService } from './services/serie.service';
import { UtilService } from './services/util.service';
import { SingleSerieComponent } from './components/single-serie/single-serie.component';
import { SeasonComponent } from './components/season/season.component';
import { CastComponent } from './components/cast/cast.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FavouritesComponent } from './components/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavbarComponent,
    SingleMovieComponent,
    SerieComponent,
    SingleSerieComponent,
    SeasonComponent,
    CastComponent,
    SearchComponent,
    FavouritesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MovieService, SerieService, UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
