import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-nine',
  templateUrl: './testimonial-nine.component.html',
  styleUrls: ['./testimonial-nine.component.css']
})
export class TestimonialNineComponent implements OnInit {

  testimonialData = [
    {
      id: 1,
      name: "Rashed kabir",
      title: "Designer",
      desc: "Having a home based business is a wonderful asset to your life.The problem still stands it comes time advertise your business for a cheap cost.I know you have looked answer everywhere.",
    },
    {
      id: 2,
      name: "Zubayer Hasan",
      title: "Developer",
      desc: "Having a home based business is a wonderful asset to your life.The problem still stands it comes time advertise your business for a cheap cost.I know you have looked answer everywhere.",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
