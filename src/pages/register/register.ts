import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  formRegister: FormGroup;

  constructor(public navCtrl: NavController,
              private fb: FormBuilder,
              private auth: AuthService) {
    this.formRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  // add equal validation
  // add email validation

  isInvalid():boolean {
    return !this.formRegister.valid
  }

  onSubmit():any {
    let user = this.formRegister.value;
      console.log(user);
    this.auth.create(user).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

}
