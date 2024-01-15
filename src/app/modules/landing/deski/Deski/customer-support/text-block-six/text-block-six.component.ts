import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-block-six',
  templateUrl: './text-block-six.component.html',
  styleUrls: ['./text-block-six.component.css']
})
export class TextBlockSixComponent implements OnInit {


  faqData = [
    {
      id: 1,
      headingNum: 'headingOne',
      collapseNum: "collapseOne",
      btnText: "Register and create your first support portal",
      desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
      collapseClass: 'accordion-collapse collapse show',
      expanded: true,
    },
    {
      id: 2,
      headingNum: 'headingTwo',
      collapseNum: "collapseTwo",
      btnText: "Manage your dashbaord easily",
      desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 3,
      headingNum: 'headingThree',
      collapseNum: "collapseThree",
      btnText: "Start giving support",
      desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
      collapseClass: 'accordion-collapse collapse'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
