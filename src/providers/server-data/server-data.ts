import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class ServerDataProvider {

  wt:any;
  // public url: any = 'http://localhost/referral/api/';
  public url:any = 'https://probusinessconnections.com/referrals/api/';
  constructor(public http: HttpClient, private t: ToastController, private l: LoadingController,) {
    console.log('Hello ServerDataProvider Provider');
    
  }

  toast(msg, duration= 2000){
    this.t.create({
      message: msg,
      duration: duration
    }).present();
  }

  wait(){
    this.wt = this.l.create({duration: 5000, content: 'Loading Data ...'});
    this.wt.present();
  }

  stop(){
    this.wt.dismiss();
  }

  login(email, password){
    let data = new FormData();
    data.append('email', email);
    data.append('password', password)

    return this.http.post(this.url+'login.php', data);
  }

  getCategories(id=0){
    return this.http.get(this.url+"categories.php?id="+id);
  }

  getChapters(id=0){
    return this.http.get(this.url+"chapters.php?id="+id)
  }

  getCategoryMembers(){
    return this.http.get(this.url+"categoryMembers.php")
  }

  postReferral(from, to, category, chapter, person, company, phone, job, details, net, gross){
    let data = new FormData();
    data.append('from_member', from)
    data.append('to_member', to)
    data.append('category', category)
    data.append('chapter', chapter)
    data.append('person', person)
    data.append('company', company)
    data.append('phone', phone)
    data.append('job', job)
    data.append('details', details)
    data.append('net', net)
    data.append('gross', gross)

    return this.http.post(this.url+"addReferral.php", data);
  }

  getReferrals(from='', to='', start='', end='', status=''){
    let data = new FormData();
    if(from) data.append('from', from);
    if(to) data.append('to', to);
    if(start) data.append('start', start);
    if(end) data.append('end', end);
    if(status) data.append('status', status);

    return this.http.post(this.url+"referrals.php", data);
  }

  updateReferral(id, gross, notes, status){
    let data = new FormData();
    data.append('id', id);
    data.append('gross', gross);
    data.append('notes', notes);
    data.append('status', status)
    
    return this.http.post(this.url+"referralUpdate.php", data);
  }

  referralReport(id){
    let data = new FormData();
    data.append('id', id);

    return this.http.post(this.url+"referralReport.php", data);
  }

  profileUpdate(id, name, company, phone, password='', designation){
    let data = new FormData();
    data.append('id', id)
    data.append('phone', phone);
    data.append('name', name);
    data.append('company', company);
    data.append('designation', designation);
    if(password && password !== ''){
      data.append('password', password);
    }

    return this.http.post(this.url+"profileUpdate.php", data);
  }

  resetPass(email){
    let data = new FormData();
    data.append('email', email)

    return this.http.post(this.url+"passwordReset.php", data);    
  }
}
