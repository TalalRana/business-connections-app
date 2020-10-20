import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ServerDataProvider } from '../providers/server-data/server-data';
import { HttpClientModule } from '@angular/common/http';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CategoryMembersPage } from '../pages/category-members/category-members';
import { AddReferralPage } from '../pages/add-referral/add-referral';
import { ReferralsCompletePage } from '../pages/referrals-complete/referrals-complete';
import { ReferralsRecievedPage } from '../pages/referrals-recieved/referrals-recieved';
import { ReferralsSentPage } from '../pages/referrals-sent/referrals-sent';
import { ReferralDetailPage } from '../pages/referral-detail/referral-detail';
import { ReferralReportPage } from '../pages/referral-report/referral-report';
import { ProfilePage } from '../pages/profile/profile';
import { PassResetPage } from '../pages/pass-reset/pass-reset';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CategoryMembersPage,
    AddReferralPage,
    ReferralsCompletePage,
    ReferralsRecievedPage,
    ReferralsSentPage,
    ReferralDetailPage,
    ReferralReportPage,
    ProfilePage,
    PassResetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BrMaskerModule,
    NgxDatatableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CategoryMembersPage,
    AddReferralPage,
    ReferralsCompletePage,
    ReferralsRecievedPage,
    ReferralsSentPage,
    ReferralDetailPage,
    ReferralReportPage,
    ProfilePage,
    PassResetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerDataProvider
  ]
})
export class AppModule {}
