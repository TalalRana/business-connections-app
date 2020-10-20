import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServerDataProvider } from '../../providers/server-data/server-data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sd: ServerDataProvider) {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  update(){
    let u= this.user;
    this.sd.wait();
    this.sd.profileUpdate(u.id, u.name, u.company, u.phone, u.password, u.designation).subscribe(d=>{
      this.sd.stop();
      if(d['error'] == null){
        this.sd.toast("Update Profile Complete");
        this.user = d['member'];
        localStorage.setItem('user', JSON.stringify(d['member']));
        this.navCtrl.popToRoot()
      }else{
        this.sd.toast(d['error'])
      }
    })
  }

}
