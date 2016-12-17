import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {BankInfo} from 'bank-info';
/*
  Generated class for the AppTemp provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppTemp {


  private _selectedBank: BankInfo;

  constructor(public http: Http) {
    console.log('Hello AppTemp Provider');
    //this._selectedItem = '';
  }

  setSelectedBank(item: BankInfo) {
    console.log('setSelectedItem Name'+ item.getBankName());
    this._selectedBank = item;
  }
  getSelectedBank(): BankInfo {
    console.log('getSelectedItem ' + this._selectedBank.getBankName());
    return this._selectedBank;
  }

}

