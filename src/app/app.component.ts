import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { Auth } from '../providers/auth'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private auth: Auth) {
    if (auth.getUser() == true) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = LoginPage;
    }
  }
}
