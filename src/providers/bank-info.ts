import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BankInfo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BankInfo {

  private _bankName: string;
  private _bankUSSD: string;

  constructor(bankName: string, bankUSSD: string) {
    this._bankName = bankName;
    this._bankUSSD = bankUSSD;
  }
  setBankName(name: string){
    this._bankName = name;
  }
  getBankName(): string {
    return this._bankName;
  }
  setBankUSSD(value: string){
    this._bankUSSD = value;
  }
  getBankUSSD(): string{
    return this._bankUSSD;
  }
}
