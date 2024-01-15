import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaqService } from '../services/faq-data/faq.service';

@Component({
  selector: 'app-dynamic-faq-details',
  templateUrl: './dynamic-faq-details.component.html',
  styleUrls: ['./dynamic-faq-details.component.css']
})
export class DynamicFaqDetailsComponent implements OnInit {

  id:any
  item:any

  constructor(private route:ActivatedRoute,private faqs:FaqService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = this.faqs.faqData().find(item => item.id == this.id)
  }

}
