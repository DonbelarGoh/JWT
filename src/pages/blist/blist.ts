import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OptionsPage} from '../options/options';
import {AppTemp} from '../../providers/app-temp';
import {SelectOption} from '../../providers/select-option';


/*
  Generated class for the Blist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-blist',
  templateUrl: 'blist.html',
  providers: [AppTemp]
})

export class BlistPage {

  private listItems: string[];

  private item1 = new SelectOption('Bank of Baroda', '*99*48#');
  private item2 = new SelectOption('Bank India', '*99*47#');
  private item3 = new SelectOption('Canara Bank', '*99*46#');
  private item4 = new SelectOption('Central Bank of India', '*99*51#');
  private item5 = new SelectOption('HDFC Bank Ltd', '*99*43#');
  private item6 = new SelectOption('ICICI Bank', '*99*44#');
  private item7 = new SelectOption('Punjab National Bank', '*99*42#');
  private item8 = new SelectOption('State Bank of India', '*99*41#');
  private item9 = new SelectOption('Syndicate Bank', '*99*55#');


  constructor(public navCtrl: NavController, public appTemp: AppTemp) {

    this.listItems = [
      this.item1.getBlistName(),
      this.item2.getBlistName(),
      this.item3.getBlistName(),
      this.item4.getBlistName(),
      this.item5.getBlistName(),
      this.item6.getBlistName(),
      this.item7.getBlistName(),
      this.item8.getBlistName(),
      this.item9.getBlistName(),

    ];
  }

  gotoOption(item: any) {
    console.log('1111selected item is '+ item);
    this.appTemp.setSelectedItem(this.compareItem(item));
    this.navCtrl.push(OptionsPage);
  }

  compareItem(item: string): SelectOption{
    switch (item){
      case this.item1.getBlistName(): return this.item1;
      case this.item2.getBlistName(): return this.item2;
      case this.item3.getBlistName(): return this.item3;
      case this.item4.getBlistName(): return this.item4;
      case this.item5.getBlistName(): return this.item5;
      case this.item6.getBlistName(): return this.item6;
      case this.item7.getBlistName(): return this.item7;
      case this.item8.getBlistName(): return this.item8;
      case this.item9.getBlistName(): return this.item9;
    }
  }
}
