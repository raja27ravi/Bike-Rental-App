import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BikeService } from '../services/bikeService';
import { BikeModel } from '../../models/bikemodel/bikemodel';


/*
  Generated class for the Confirm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
   styles: ['ol, ul {list-style: none;} ul {list-style-type: disc;} .my-nav { list-style-type: disc;}']
})
export class ConfirmPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams,private bikeService: BikeService) {}
  bikes : BikeModel;
  ngOnInit(){
  this.bikes = this.bikeService.getBikes();
  console.log(this.bikes.bikename.bike_image);


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

}
