import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-faq-two',
  templateUrl: './pricing-faq-two.component.html',
  styleUrls: ['./pricing-faq-two.component.css']
})
export class PricingFaqTwoComponent implements OnInit {

  faqData = [
    {
      id: 1,
      headingNum: 'headingOne',
      collapseNum: "collapseOne",
      btnText: "How does the free trial work?",
      desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass: 'accordion-collapse collapse',
      expanded: true,
    },
    {
      id: 2,
      headingNum: 'headingTwo',
      collapseNum: "collapseTwo",
      btnText: "How do you weigh different criteria in your process?",
      desc: `That's right. We want to make Ticket Tailor as affordable as possible for event organisers of all sizes. You also have the option to pass on any ticketing costs to your customers through a booking fee. We always aim to be the best value on the market so please let us know if you think you can find a similar product for a lower price.`,
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 3,
      headingNum: 'headingThree',
      collapseNum: "collapseThree",
      btnText: "What does First Round look for in an idea?",
      desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 4,
      headingNum: 'headingFour',
      collapseNum: "collapseFour",
      btnText: "What do you look for in a founding team?",
      desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 5,
      headingNum: 'headingFive',
      collapseNum: "collapseFive",
      btnText: "Do you recommend Pay as you go or Pre pay?",
      desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 6,
      headingNum: 'headingSix',
      collapseNum: "collapseSix",
      btnText: "Can I pass the fees on to my customers?",
      desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 7,
      headingNum: 'headingSeven',
      collapseNum: "collapseSeven",
      btnText: "How do I get paid for the tickets sold?",
      desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
      collapseClass: 'accordion-collapse collapse'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
