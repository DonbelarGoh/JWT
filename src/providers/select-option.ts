import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SelectOption provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SelectOption {

  private _blistName: string;
  private _blistValue: string;

  constructor(blistName: string, blistValue: string) {
    this._blistName = blistName;
    this._blistValue = blistValue;
  }
  getBlistName(): string {
    return this._blistName;
  }
  getBlistValue(): string{
    return this._blistValue;
  }
}
