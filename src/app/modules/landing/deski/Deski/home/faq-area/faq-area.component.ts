import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-faq-area',
  templateUrl: './faq-area.component.html',
  styleUrls: ['./faq-area.component.css']
})
export class FaqAreaComponent implements OnInit {

  @Input () pricing! : boolean;
  @Input () sol_m! : boolean;

  faqData = [
    {
      id: 1,
      headingNum:'headingOne',
      collapseNum:"collapseOne",
      btnText:"How the affiliate programe works?",
      desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass:'accordion-collapse collapse'
    },
    {
      id: 2,
      headingNum:'headingTwo',
      collapseNum:"collapseTwo",
      btnText:"How to create customer panel?",
      desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      expanded:true,
      collapseClass:'accordion-collapse collapse show'
    },
    {
      id: 3,
      headingNum:'headingThree',
      collapseNum:"collapseThree",
      btnText:"How delete my account?",
      desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass:'accordion-collapse collapse'
    },
    {
      id: 4,
      headingNum:'headingFour',
      collapseNum:"collapseFour",
      btnText:"Ho to invite people with refferel link?",
      desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass:'accordion-collapse collapse'
    },
    {
      id: 5,
      headingNum:'headingFive',
      collapseNum:"collapseFive",
      btnText:"Is ios app available for the iphone?",
      desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
      collapseClass:'accordion-collapse collapse'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
