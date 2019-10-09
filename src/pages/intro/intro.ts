import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  @ViewChild(Slides) slides: Slides;
  private _listener: Subscription = new Subscription();

  constructor(private navCtrl: NavController) {
  }

  navToHomePage(){
    this._listener =  this.slides.ionSlideTouchEnd.subscribe(()=>{
      this.navCtrl.setRoot('HomePage');
    });
  }
  ionViewWillLeave(){
    this._listener.unsubscribe();

  }

}



