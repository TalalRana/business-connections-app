import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CategoryMembersPage } from '../category-members/category-members';
import { ReferralsRecievedPage } from '../referrals-recieved/referrals-recieved';
import { ReferralsSentPage } from '../referrals-sent/referrals-sent';
import { ReferralsCompletePage } from '../referrals-complete/referrals-complete';
import { ReferralReportPage } from '../referral-report/referral-report';
import { ServerDataProvider } from '../../providers/server-data/server-data';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any={};
  constructor(public navCtrl: NavController, public sd: ServerDataProvider) {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log(this.user)
      this.sd.toast('Welcome '+this.user.name);
    }else{
      this.navCtrl.setRoot(LoginPage)
    }
  }

  gotoPage(x){
    switch (x) {
      case 'categoryMember':
        this.navCtrl.push(CategoryMembersPage)
      break;
      case 'recieved':
        this.navCtrl.push(ReferralsRecievedPage)
      break;
      case 'sent':
        this.navCtrl.push(ReferralsSentPage)
      break;
      case 'complete':
        this.navCtrl.push(ReferralsCompletePage)
      break;
      case 'report':
        this.navCtrl.push(ReferralReportPage)
      break;
      case 'profile':
        this.navCtrl.push(ProfilePage)
      break;
    
      default:
        break;
    }
  }

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage)
  }
}
