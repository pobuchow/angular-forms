import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountSettings } from 'src/app/data/account-settings';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  originalAccountSettings: AccountSettings = {
    firstname: "Claude",
    lastname: "Makélélé",
    password: "Cm123!",
    email: "claude@makeleke.fr",
    birthday: new Date("1973-02-18"),
    gender: null, 
    //{
    //  name: "Male"
    //},
    about: "Some notes about me...",
    privateAccount: true
  };

  accountSettings : AccountSettings = { ...this.originalAccountSettings }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

  }
}
