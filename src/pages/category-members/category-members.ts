import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServerDataProvider } from '../../providers/server-data/server-data';
import { AddReferralPage } from '../add-referral/add-referral';

@Component({
  selector: 'page-category-members',
  templateUrl: 'category-members.html',
})
export class CategoryMembersPage {

  categories: any=[];
  category:any;
  members:any=[];
  member:any;
  constructor(public nav: NavController, public navParams: NavParams, public sd: ServerDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryMembersPage');
    this.sd.wait();
    this.sd.getCategoryMembers().subscribe(d=>{
      this.sd.stop()
      this.categories = d;
    },err=>{
      console.log(err)
      this.sd.toast('Internet Connection Error')
    })
  }

  populateList(){
    this.categories.forEach(e => {
      if(e.id == this.category){
        this.members = e.members;
      }
    });
    console.log(this.members)
  }

  selectedMember(member, chapter){
    console.log("member: "+member+", chapter="+chapter+", category="+this.category);

    this.nav.push(AddReferralPage, {member: member, chapter: chapter, category: this.category});
  }

}
