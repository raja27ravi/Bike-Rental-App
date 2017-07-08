import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LocationPage } from '../pages/location/location';
import { BikefilterPage } from '../pages/bikefilter/bikefilter';
import { RegistrationPage } from '../pages/registration/registration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MomentModule } from 'angular2-moment';
import { ConfirmPage } from '../pages/confirm/confirm';
import { Reviews } from '../providers/reviews';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LocationPage,
    BikefilterPage,
    RegistrationPage,
    ConfirmPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LocationPage,
    BikefilterPage,
    RegistrationPage,
    ConfirmPage
  ],
  providers: [
    Reviews,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
