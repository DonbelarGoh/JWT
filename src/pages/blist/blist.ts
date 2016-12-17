import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OptionsPage} from '../options/options';
import {BankInfo} from '../../providers/bank-info';


/*
  Generated class for the Blist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-blist',
  templateUrl: 'blist.html',
  providers: [BankInfo]
})

export class BlistPage {

  private listItems: string[];

  private item1 = new BankInfo('Bank of Baroda', '*99*48#');
  private item2 = new BankInfo('Bank India', '*99*47#');
  private item3 = new BankInfo('Canara Bank', '*99*46#');
  private item4 = new BankInfo('Central Bank of India', '*99*51#');
  private item5 = new BankInfo('HDFC Bank Ltd', '*99*43#');
  private item6 = new BankInfo('ICICI Bank', '*99*44#');
  private item7 = new BankInfo('Punjab National Bank', '*99*42#');
  private item8 = new BankInfo('State Bank of India', '*99*41#');
  private item9 = new BankInfo('Syndicate Bank', '*99*55#');


  constructor(public navCtrl: NavController) {

    this.listItems = [
      this.item1.getBankName(),
      this.item2.getBankName(),
      this.item3.getBankName(),
      this.item4.getBankName(),
      this.item5.getBankName(),
      this.item6.getBankName(),
      this.item7.getBankName(),
      this.item8.getBankName(),
      this.item9.getBankName(),
    ];
  }

  gotoOption(item: string) {
    this.navCtrl.push(OptionsPage, {selectedBank : this.compareItem(item)});
  }

  compareItem(item: string): BankInfo{
    switch (item){
      case this.item1.getBankName(): return this.item1;
      case this.item2.getBankName(): return this.item2;
      case this.item3.getBankName(): return this.item3;
      case this.item4.getBankName(): return this.item4;
      case this.item5.getBankName(): return this.item5;
      case this.item6.getBankName(): return this.item6;
      case this.item7.getBankName(): return this.item7;
      case this.item8.getBankName(): return this.item8;
      case this.item9.getBankName(): return this.item9;
    }
  }
}
