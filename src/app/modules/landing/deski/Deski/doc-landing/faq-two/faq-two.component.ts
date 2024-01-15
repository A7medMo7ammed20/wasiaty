import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-two',
  templateUrl: './faq-two.component.html',
  styleUrls: ['./faq-two.component.css']
})
export class FaqTwoComponent implements OnInit {

  faqData = [
    {
      id: 1,
      headingNum: 'headingOne',
      collapseNum: "collapseOne",
      btnText: "How the affiliate programe works?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse show',
      expanded: true,
    },
    {
      id: 2,
      headingNum: 'headingTwo',
      collapseNum: "collapseTwo",
      btnText: "How delete my account?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 3,
      headingNum: 'headingThree',
      collapseNum: "collapseThree",
      btnText: "Ho to invite people with refferel link?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 4,
      headingNum: 'headingFour',
      collapseNum: "collapseFour",
      btnText: "Is ios app available for the iphone?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 5,
      headingNum: 'headingFive',
      collapseNum: "collapseFive",
      btnText: "How the affiliate programe works?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse show',
      expanded: true,
    },
    {
      id: 6,
      headingNum: 'headingSix',
      collapseNum: "collapseSix",
      btnText: "How to create customer panel?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 7,
      headingNum: 'headingSeven',
      collapseNum: "collapseSeven",
      btnText: "How delete my account?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 8,
      headingNum: 'headingEight',
      collapseNum: "collapseEight",
      btnText: "Ho to invite people with refferel link?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
