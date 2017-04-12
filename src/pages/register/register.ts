import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  formRegister: FormGroup;

  constructor(public navCtrl: NavController,
              private fb: FormBuilder) {
    this.formRegister = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      age: [''],
    });

  }

}
