import { Component,Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {

  @Input () dark! : boolean ;

  getFormData (data : NgForm) {
    console.log(data)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
