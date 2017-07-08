import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { BikeModel } from '../../models/bikemodel/bikemodel';
import { BikeService } from '../services/bikeService';

import { LocationPage } from '../location/location';
import { BikefilterPage } from '../bikefilter/bikefilter';
import { Reviews } from '../../providers/reviews';


import moment from 'moment';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})



export class Page1 implements OnInit {
//constructor (private bikeService: BikeService){}
  bikes: any;
  StartDate: any;
  pushPage:any;
  myDate: any = new Date().toISOString();
  ReturnmyDate: any = new Date().toISOString();
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public reviewService: Reviews,private bikeService: BikeService) {
  this.pushPage = BikefilterPage;
  }
  ngOnInit(): void {

    //this.todayDate(this.myDate);
  }

    ionViewDidLoad(){
    this.reviewService.getBikes().then((data) => {
      console.log(data);
      this.bikes = data;
    });
  }

  todayDate(datetoDay: string): void {
    // let utc = new Date().toJSON().slice(0, 10);
    let utc = new Date();

    // this.StartDate= moment(utc).format('YYYYMMDD');
    // this.myDate= moment(utc).format('Do MMM, hh:mm A');
    // this.StartDate= moment(utc).format('Do MMM, hh:mm A');
    // if (datetoDay === undefined) {
    //   this.myDate = utc;
    //   // this.StartDate = this.myDate;
    // }
  }
  setspandate(event): void {

    this.StartDate = this.myDate;
  }


  presentLoading(value : any) {

const Bikename = new  BikeModel(value);
//console.log(value);
this.bikeService.addBikes(Bikename);
this.navCtrl.push(LocationPage);
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();

  }
}
