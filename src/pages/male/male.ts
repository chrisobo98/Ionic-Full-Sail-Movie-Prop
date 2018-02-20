import { Component,ViewChild,ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-male',
  templateUrl: 'male.html',
})
export class MalePage {

  public config: Object;
  
  @ViewChild(Slides) private slides: Slides;
  @ViewChild('thumbsUp', {read: ElementRef}) thumbsUp;
  @ViewChild('thumbsDown', {read: ElementRef}) thumbsDown;
  @ViewChild('mySlide', {read: ElementRef}) mySlide;
  @ViewChild('myImg', {read: ElementRef}) myImg;
  @ViewChild('cardTitle', {read: ElementRef}) cardTitle;
  @ViewChild('cardYes', {read: ElementRef}) cardYes;
  @ViewChild('iconYes', {read: ElementRef}) iconYes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MalePage');
  }

  changeStyle(thumbsUp){
    this.renderer.setElementStyle(this.mySlide.nativeElement, 'opacity', '1');
    this.renderer.setElementStyle(this.mySlide.nativeElement, 'background-color', 'gray');
    this.renderer.setElementStyle(this.thumbsDown.nativeElement, 'opacity', '0');
    this.renderer.setElementStyle(this.thumbsUp.nativeElement, 'opacity', '0');
    this.renderer.setElementStyle(this.cardTitle.nativeElement, 'color', 'white');
    this.renderer.setElementStyle(this.cardYes.nativeElement, 'opacity', '1');
    this.renderer.setElementStyle(this.iconYes.nativeElement, 'opacity', '1');
    this.renderer.setElementStyle(this.myImg.nativeElement, 'opacity', '0.4');
    this.renderer.setElementStyle(this.myImg.nativeElement, 'background-color', 'black');



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