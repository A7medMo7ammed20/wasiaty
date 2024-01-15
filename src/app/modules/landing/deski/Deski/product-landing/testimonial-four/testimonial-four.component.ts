import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-four',
  templateUrl: './testimonial-four.component.html',
  styleUrls: ['./testimonial-four.component.css']
})
export class TestimonialFourComponent implements OnInit {

  testimonialData = [
    {
      id: 1,
      name: 'Martin Jonas,',
      country: 'USA',
      desc: "Latin derived from Cicero's 1st-century BC text De Finibus Bonoru et Malorum print demo version.",
      ratings:[
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
      ]
    },
    {
      id: 2,
      name: 'Martin Jonas,',
      country: 'USA',
      desc: "Placeholder text commonly used in the graphic, print, and  industries for preview layouts & visual",
      ratings:[
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
      ]
    },
    {
      id: 3,
      name: 'Martin Jonas,',
      country: 'USA',
      desc: "From its medieval origins to the digital er, learn everything there is to know about the ubiquitous",
      ratings:[
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
      ]
    },
    {
      id: 4,
      name: 'Martin Jonas,',
      country: 'USA',
      desc: "Latin derived from Cicero's 1st-century BC text De Finibus Bonoru et Malorum print demo version.",
      ratings:[
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
      ]
    },
    {
      id: 5,
      name: 'Martin Jonas,',
      country: 'USA',
      desc: "Placeholder text commonly used in the graphic, print, and  industries for preview layouts & visual",
     ratings:[
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
      ]
    },
    {
      id: 6,
      name: 'Martin Jonas,',
      country: 'USA',
      desc: "From its medieval origins to the digital er, learn everything there is to know about the ubiquitous",
      ratings:[
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
        {rating:'<i class="fa fa-star" aria-hidden="true"></i>'},
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
