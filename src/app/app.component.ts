import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../providers/auth.service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private auth: AuthService) {
    if (auth.getUser() == true) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = LoginPage;
    }
  }
}
