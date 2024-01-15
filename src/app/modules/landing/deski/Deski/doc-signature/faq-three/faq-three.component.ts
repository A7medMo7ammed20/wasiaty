import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-three',
  templateUrl: './faq-three.component.html',
  styleUrls: ['./faq-three.component.css']
})
export class FaqThreeComponent implements OnInit {

  faqData = [
    {
      id: 1,
      headingNum:'headingOne',
      collapseNum:"collapseOne",
      btnText:"How does the free trial work?",
      desc:`It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass:'accordion-collapse collapse'
    },
    {
      id: 2,
      headingNum:'headingTwo',
      collapseNum:"collapseTwo",
      btnText:"How do you different criteria in your process?",
      desc:`It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      expanded:true,
      collapseClass:'accordion-collapse collapse show'
    },
    {
      id: 3,
      headingNum:'headingThree',
      collapseNum:"collapseThree",
      btnText:"What does First Round look for in an idea?",
      desc:`It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass:'accordion-collapse collapse'
    },
    {
      id: 4,
      headingNum:'headingFour',
      collapseNum:"collapseFour",
      btnText:"What do you look for in a founding team?",
      desc:`It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass:'accordion-collapse collapse'
    },
    {
      id: 5,
      headingNum:'headingFive',
      collapseNum:"collapseFive",
      btnText:"Do you recommend Pay as you go or Pre pay?",
      desc:`It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass:'accordion-collapse collapse'
    },
    {
      id: 6,
      headingNum:'headingSix',
      collapseNum:"collapseSix",
      btnText:"Can I pass the fees on to my customers?",
      desc:`It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass:'accordion-collapse collapse'
    },
    {
      id: 7,
      headingNum:'headingSeven',
      collapseNum:"collapseSeven",
      btnText:"How do I get paid for the tickets sold?",
      desc:`It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass:'accordion-collapse collapse'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
