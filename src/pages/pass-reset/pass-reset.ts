import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServerDataProvider } from '../../providers/server-data/server-data';

@Component({
  selector: 'page-pass-reset',
  templateUrl: 'pass-reset.html',
})
export class PassResetPage {

  reset:FormGroup
  email:any=''
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public sd : ServerDataProvider,
    public ac: AlertController) {
    this.reset = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassResetPage');
  }

  submit(){
    this.sd.wait();
    this.sd.resetPass(this.email).subscribe(d=>{
      this.sd.stop();
      if(d['error'] == null){
        this.ac.create({
          title: 'Reset Password Request',
          message: 'Password reset email is sent to your email.\n Kindly user web portal to change your password!'
        }).present();
      }else{
        this.sd.toast(d['error'])
      }
    },err=>{
      console.log(err)
      this.sd.toast('Internet Connection Error')
    })
  }

}
