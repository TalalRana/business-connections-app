import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServerDataProvider } from '../../providers/server-data/server-data';

@Component({
  selector: 'page-referral-detail',
  templateUrl: 'referral-detail.html',
})
export class ReferralDetailPage {

  ref:any;
  type:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sd: ServerDataProvider) {
    this.ref = JSON.parse(this.navParams.get('detail'))
    this.type = this.navParams.get('type')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralDetailPage');
  }

  update(){
    this.sd.wait()
    this.sd.updateReferral(this.ref.id, this.ref.gross, this.ref.notes, this.ref.status).subscribe(d=>{
      this.sd.stop();
      if(d['error'] == null){
        this.sd.toast('Referral Updated!');
      }else{
        this.sd.toast(d['error'])
      }
    },err=>{
      console.log(err)
      this.sd.toast('Internet Connection Error')
    })
  }

}
