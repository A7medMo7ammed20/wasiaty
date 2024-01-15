import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-text-block-two',
  templateUrl: './text-block-two.component.html',
  styleUrls: ['./text-block-two.component.css']
})
export class TextBlockTwoComponent implements OnInit {

  @Input () event! : boolean

  faqData = [
    {
      id: 1,
      headingNum: 'headingOne',
      collapseNum: "collapseOne",
      btnText: "Register and create your first seller portal.",
      desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
      collapseClass: 'accordion-collapse collapse show',
      expanded: true,
    },
    {
      id: 2,
      headingNum: 'headingTwo',
      collapseNum: "collapseTwo",
      btnText: "Manage your client easily",
      desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
      collapseClass: 'accordion-collapse collapse'
    },
    {
      id: 3,
      headingNum: 'headingThree',
      collapseNum: "collapseThree",
      btnText: "Start selling ticket",
      desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
      collapseClass: 'accordion-collapse collapse'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
