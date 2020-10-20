import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServerDataProvider } from '../../providers/server-data/server-data';

@Component({
  selector: 'page-referral-report',
  templateUrl: 'referral-report.html',
})
export class ReferralReportPage {

  report:any={}
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sd: ServerDataProvider) {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralReportPage');
    this.sd.wait();
    this.sd.referralReport(this.user.id).subscribe(d=>{
      console.log(d)
      this.sd.stop();
      this.report = d
    },err=>{
      console.log(err)
      this.sd.toast('Internet Connection Error')
    })
  }

}
