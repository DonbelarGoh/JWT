/**
 * Created by Administrator on 11/29/2016.
 */
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {BlistPage} from '../blist/blist';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {


  blistPage = BlistPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

}
