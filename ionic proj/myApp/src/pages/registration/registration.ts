import { Component } from '@angular/core';
import { LoadingController,NavController, NavParams } from 'ionic-angular';
// import { FormBuilder,Validators} from '@angular/common';
import { ConfirmPage } from '../confirm/confirm';
import { Page1 } from '../page1/page1';

/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

   public regform:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController
  // , public _form:FormBuilder
  ) {

    // this.regform= this._form.group({
    //   "email":["",Validators.required],
    //   "password":["",Validators.required],
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  submitted = false;

  submit() { this.submitted = true;
this.navCtrl.push(Page1);
//this.loadingCtrl.;

 }
}
