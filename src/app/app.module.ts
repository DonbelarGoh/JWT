import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { MyApp } from './app.component';
import {Ionic2RatingModule} from "ionic2-rating";

import {LoginPage} from "../pages/login/login";
import {BlistPage} from '../pages/blist/blist';
import {OptionsPage} from '../pages/options/options';
import {AppTemp} from "../providers/app-temp";


@NgModule({
  declarations: [
    MyApp,

    LoginPage,
    BlistPage,
    OptionsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    FormsModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    LoginPage,
    BlistPage,
    OptionsPage,
  ],
  providers: [ AppTemp, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
