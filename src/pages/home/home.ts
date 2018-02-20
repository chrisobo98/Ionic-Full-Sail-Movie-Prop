import { Component, ViewChild,ElementRef, Renderer,} from '@angular/core';
import { NavController, Slides, AlertController  } from 'ionic-angular';
import {MalePage} from '../male/male';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  malePage = MalePage;


  public config: Object;
  
  @ViewChild(Slides) private slides: Slides;
  @ViewChild('thumbsUp', {read: ElementRef}) thumbsUp;
  @ViewChild('thumbsDown', {read: ElementRef}) thumbsDown;
  @ViewChild('mySlide', {read: ElementRef}) mySlide;
  @ViewChild('myImg', {read: ElementRef}) myImg;
  @ViewChild('cardTitle', {read: ElementRef}) cardTitle;
  @ViewChild('cardYes', {read: ElementRef}) cardYes;
  @ViewChild('iconYes', {read: ElementRef}) iconYes;



  constructor(public navCtrl: NavController, public renderer: Renderer, private alertCtrl: AlertController) {

  }

  changeStyle(thumbsUp){
      this.renderer.setElementStyle(this.mySlide.nativeElement, 'opacity', '1');
      this.renderer.setElementStyle(this.mySlide.nativeElement, 'background-color', 'pink');
      this.renderer.setElementStyle(this.thumbsDown.nativeElement, 'opacity', '0');
      this.renderer.setElementStyle(this.thumbsUp.nativeElement, 'opacity', '0');
      this.renderer.setElementStyle(this.cardTitle.nativeElement, 'color', 'black');
      this.renderer.setElementStyle(this.cardYes.nativeElement, 'opacity', '1');
      this.renderer.setElementStyle(this.iconYes.nativeElement, 'opacity', '1');
  }


  public ngOnInit() {
    this.slides.effect = 'coverflow';
    this.slides.centeredSlides = true;
    this.slides.slidesPerView = 'auto';
    this.slides.spaceBetween = '10%';
    this.slides.loop = true;
    this.slides.coverflow = {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0,
      slideShadows: true,
    }
  }

}
