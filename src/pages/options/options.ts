import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppTemp} from '../../providers/app-temp';

/*
  Generated class for the Options page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
  providers: [AppTemp]
})
export class OptionsPage {

  selectedItem: string;

  constructor(public navCtrl: NavController, public appTemp: AppTemp) {
    this.selectedItem = appTemp.getSelectedItem().getBlistName();
    console.log(this.selectedItem);
  }

  ionViewDidLoad() {
    console.log('Hello OptionsPage Page');
  }

}
