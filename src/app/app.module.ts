import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HotNewsComponent } from './components/hot-news/hot-news.component';
import { LatestNewsCardComponent } from './components/latest-news-card/latest-news-card.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TimePipe } from './pipes/time.pipe';
import { DayPipe } from './pipes/day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    WeatherCardComponent,
    HotNewsComponent,
    LatestNewsCardComponent,
    LatestNewsComponent,
    WeatherComponent,
    TimePipe,
    DayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
