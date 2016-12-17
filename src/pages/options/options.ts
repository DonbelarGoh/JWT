import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AppTemp} from '../../providers/app-temp';

import {BankInfo} from '../../providers/bank-info';

/*
  Generated class for the Options page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
  providers: [BankInfo]
})
export class OptionsPage {
  appTemp: AppTemp;
  selectedBank: BankInfo;
  selectedBankName: string;
  constructor(public navCtrl: NavController, public navPrams: NavParams) {
    this.selectedBank = navPrams.get('selectedBank');
    this.selectedBankName = this.selectedBank.getBankName();
    this.appTemp.setSelectedBank(this.selectedBank);  //----  Save selected Bank Info.
    console.log(this.selectedBank.getBankName());
  }

  ionViewDidLoad() {
    console.log('Hello OptionsPage Page');
  }

}
