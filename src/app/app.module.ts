import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { SwiperModule } from 'ngx-swiper-wrapper/dist/lib/swiper.module';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';
import { SafeHtmlPipe } from './safe-html.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: false,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
  slidePrevClass: '.swiper-button-prev',
  slideNextClass: '.swiper-button-next'
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChartComponent,
    SimpleChartComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    AmChartsModule

  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
