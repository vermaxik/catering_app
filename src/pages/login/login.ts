import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';

import { RegisterPage } from '../register/register';
//import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: Loading;

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController) {


    // this.showLoading();
    // setTimeout(() =>
    //   {
    //       this.loading.dismiss();
    //       this.navCtrl.setRoot(TabsPage);
    //   },
    //   5000);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

}
