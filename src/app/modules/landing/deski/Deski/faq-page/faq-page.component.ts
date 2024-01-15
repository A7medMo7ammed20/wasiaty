import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FaqService } from '../services/faq-data/faq.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {

  getFormData (data : NgForm) {
    console.log(data)
  }

  faqItems : any;
  constructor(private faqs:FaqService) {
    this.faqItems = this.faqs.faqData()
  }

  ngOnInit(): void {
  }

}
