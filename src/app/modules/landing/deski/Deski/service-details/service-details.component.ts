import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  social_links = ['fa fa-facebook','fa fa-twitter','fa fa-dribbble','fa fa-linkedin']

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

  constructor() { }

  ngOnInit(): void {
  }

}
