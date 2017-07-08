import { Component } from '@angular/core';
import { NavController, NavParams ,ModalController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { Reviews } from '../../providers/reviews';
import { ConfirmPage } from '../confirm/confirm';
import { AddReviewPage } from '../add-review-page/add-review-page';


/*
  Generated class for the Location page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
hotels:any;
 //locations: Array<{Name: string, Address: any , PhoneNo:any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public reviewService: Reviews, public modalCtrl: ModalController) {
    // this.locations = [
    //   { Name: 'Demo hotel1', Address: 'Near Hp Gas Godown',PhoneNo:'6666666414' },
    //   { Name: 'Demo hotel2', Address: 'Near rtc complex',PhoneNo:'6666666414' },
    //   { Name: 'Demo hotel3', Address: 'Near rtc complex',PhoneNo:'6666666414' },
    //   { Name: 'Demo hotel4', Address: 'Near rtc complex',PhoneNo:'6666666414' },
    // ];
  }
locationSelected(location){
this.navCtrl.push(ConfirmPage);
}

addReview(){
    let modal = this.modalCtrl.create(AddReviewPage);
    modal.onDidDismiss(hotel => {
      if(hotel){
        this.hotels.push(hotel);
        this.reviewService.createhotel(hotel);
      }
    });
    modal.present();
  }

  ionViewDidLoad() {
     this.reviewService.getHotels().then((data) => {
      console.log(data);
      this.hotels = data;
    });
  }

}
