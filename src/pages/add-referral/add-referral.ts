import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServerDataProvider } from '../../providers/server-data/server-data';

@Component({
  selector: 'page-add-referral',
  templateUrl: 'add-referral.html',
})
export class AddReferralPage {

  user:any;
  form:FormGroup
  referral:any={from: '', to:'', category:'', chapter:'', person:'', company:'', phone:'', job:'', details:'', net:'', gross:''}
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public sd: ServerDataProvider) {
    this.referral.to = this.navParams.get('member')
    this.referral.category = this.navParams.get('category')
    this.referral.chapter = this.navParams.get('chapter')
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
      this.referral.from = this.user.id;
    }

    this.form = this.fb.group({
      person: ['', Validators.required],
      company: [''],
      phone: ['', Validators.required],
      job: ['', Validators.required],
      details: ['', Validators.required],
      net: [''],
      gross: ['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReferralPage');
    console.log(this.referral)
  }

  referralSubmit(){
    console.log(this.referral)
    let r = this.referral

    this.sd.postReferral(r.from, r.to, r.category, r.chapter, r.person, r.company, r.phone, r.job, r.details, r.net, r.gross).subscribe(d=>{
      console.log(d);
      if(d['success']){
        this.sd.toast('Data saved!');
        this.navCtrl.popToRoot();
      }else{
        this.sd.toast(d['error'])
      }
    })
  }

}
