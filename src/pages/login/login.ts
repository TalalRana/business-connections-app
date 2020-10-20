import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServerDataProvider } from '../../providers/server-data/server-data';
import { HomePage } from '../home/home';
import { PassResetPage } from '../pass-reset/pass-reset';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form:FormGroup
  user:any={email: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public sd: ServerDataProvider) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log('submited', this.user);
    this.sd.login(this.user.email, this.user.password).subscribe((d: any)=>{
      console.log(d)
      if(d['error'] == null){
        this.sd.toast('Login Successfully');
        localStorage.setItem('user', JSON.stringify(d['data']))
        this.navCtrl.setRoot(HomePage)
      }else{
        this.sd.toast(d['error'])
      }
    })
  }

  forget(){
    this.navCtrl.push(PassResetPage)
  }
}
