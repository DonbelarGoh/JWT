import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {SelectOption} from 'select-option';
/*
  Generated class for the AppTemp provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppTemp {


  private _selectedItem: SelectOption;



  constructor(public http: Http) {
    console.log('Hello AppTemp Provider');
    //this._selectedItem = '';
  }

  setSelectedItem(item: SelectOption) {
    console.log('setSelectedItem Name'+ item.getBlistName());
    this._selectedItem = item;
  }
  getSelectedItem(): SelectOption {
    console.log('getSelectedItem ' + this._selectedItem.getBlistName());
    return this._selectedItem;
  }

}

