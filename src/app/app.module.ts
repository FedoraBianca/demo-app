import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SliderGalleryComponent } from './shared/slider-gallery/slider-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderGalleryComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
