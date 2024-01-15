import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  hidePassword = false;
  hideConfirmPassword = false;
  date = new Date().getFullYear();

  handleHidePassword () {
    this.hidePassword = !this.hidePassword
  }
  handleHideConfirmPassword() {
    this.hideConfirmPassword = !this.hideConfirmPassword
  }

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
