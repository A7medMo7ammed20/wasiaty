import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doc-area',
  templateUrl: './doc-area.component.html',
  styleUrls: ['./doc-area.component.css']
})
export class DocAreaComponent implements OnInit {

  @Input () doc_banner! : boolean;

  getFormData (data : NgForm) {
    console.log(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
