import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-slider-gallery',
  templateUrl: './slider-gallery.component.html',
  styleUrls: ['./slider-gallery.component.less']
})
export class SliderGalleryComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit(){
    this.carouselTileItems = [
      { 'imageSrc': 'assets/images/bg.jpg'},
      { 'imageSrc': 'assets/images/canberra.jpg'},
      { 'imageSrc': 'assets/images/car.png'},
      { 'imageSrc': 'assets/images/holi.jpg'},
      { 'imageSrc': 'assets/images/bg.jpg'},
      { 'imageSrc': 'assets/images/canberra.jpg'},
      { 'imageSrc': 'assets/images/car.png'},
      { 'imageSrc': 'assets/images/holi.jpg'},
      { 'imageSrc': 'assets/images/bg.jpg'},
      { 'imageSrc': 'assets/images/canberra.jpg'},
      { 'imageSrc': 'assets/images/car.png'},
      { 'imageSrc': 'assets/images/holi.jpg'}
    ];

    this.carouselTile = {
      grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      interval: 2000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel

}
