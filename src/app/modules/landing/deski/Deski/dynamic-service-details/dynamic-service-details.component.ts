import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/service-data/services.service';

@Component({
  selector: 'app-dynamic-service-details',
  templateUrl: './dynamic-service-details.component.html',
  styleUrls: ['./dynamic-service-details.component.css']
})
export class DynamicServiceDetailsComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-linkedin','fa fa-dribbble']

  faqData = [
    {
      id: 1,
      headingNum: 'headingOne',
      collapseNum: "collapseOne",
      btnText: "How the affiliate programe works?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 2,
      headingNum: 'headingTwo',
      collapseNum: "collapseTwo",
      btnText: "How to create customer panel?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      expanded: true,
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 3,
      headingNum: 'headingThree',
      collapseNum: "collapseThree",
      btnText: "How delete my account?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 4,
      headingNum: 'headingFour',
      collapseNum: "collapseFour",
      btnText: "Ho to invite people with refferel link?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse'
    },
  ]

  id:any
  item:any

  constructor(private route:ActivatedRoute,private services:ServicesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = this.services.servicesData().find(item => item.id == this.id)
  }

}
