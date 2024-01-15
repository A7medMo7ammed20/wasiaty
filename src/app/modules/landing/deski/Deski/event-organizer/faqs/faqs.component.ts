import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {


  faqData = [
    {
      id: 1,
      headingNum: 'headingOne',
      collapseNum: "collapseOne",
      btnText: "How does the free trial work?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse show',
      expanded: true,
    },
    {
      id: 2,
      headingNum: 'headingTwo',
      collapseNum: "collapseTwo",
      btnText: "How do you weigh different criteria in your process?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 3,
      headingNum: 'headingThree',
      collapseNum: "collapseThree",
      btnText: "What does First Round look for in an idea?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 4,
      headingNum: 'headingFour',
      collapseNum: "collapseFour",
      btnText: "What do you look for in a founding team?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 5,
      headingNum: 'headingFive',
      collapseNum: "collapseFive",
      btnText: "Do you recommend Pay as you go or Pre pay?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 6,
      headingNum: 'headingSix',
      collapseNum: "collapseSix",
      btnText: "Can I pass the fees on to my customers?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
    {
      id: 7,
      headingNum: 'headingSeven',
      collapseNum: "collapseSeven",
      btnText: "lorem ipsum dummy text here will some questions?",
      desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass: 'accordion-collapse collapse',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
