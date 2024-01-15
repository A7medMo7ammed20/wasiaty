import { Component, OnInit } from '@angular/core';
import SwiperCore, {Navigation } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-testimonial-five',
  templateUrl: './testimonial-five.component.html',
  styleUrls: ['./testimonial-five.component.css']
})
export class TestimonialFiveComponent implements OnInit {

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
