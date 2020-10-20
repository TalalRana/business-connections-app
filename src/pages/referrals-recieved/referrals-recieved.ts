import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServerDataProvider } from '../../providers/server-data/server-data';
import { ReferralDetailPage } from '../referral-detail/referral-detail';

@Component({
  selector: 'page-referrals-recieved',
  templateUrl: 'referrals-recieved.html',
})
export class ReferralsRecievedPage {

  user:any;
  data:any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public sd: ServerDataProvider) {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralsRecievedPage');
    this.sd.wait()
    this.sd.getReferrals('',this.user.id).subscribe(d=>{
      this.sd.stop()
      this.data = d;
    },err=>{
      console.log(err)
      this.sd.toast('Internet Connection Error');
    })
  }

  detail(detail){
    this.navCtrl.push(ReferralDetailPage, {detail: JSON.stringify(detail), type: 1})
  }

}
