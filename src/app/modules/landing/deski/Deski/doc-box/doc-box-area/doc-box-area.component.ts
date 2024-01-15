import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doc-box-area',
  templateUrl: './doc-box-area.component.html',
  styleUrls: ['./doc-box-area.component.css']
})
export class DocBoxAreaComponent implements OnInit {

  @Input () doc_banner! : boolean;

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
