import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-block-sixteen',
  templateUrl: './text-block-sixteen.component.html',
  styleUrls: ['./text-block-sixteen.component.css']
})
export class TextBlockSixteenComponent implements OnInit {

  tab_content = [
    { id: "our-story", title: "Our Story", active: true, desc_1: "Lorem ipsum dolor sit amet, consecteur adipiscng elit sed do eiusmod tempor non sunt", desc_2: "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla pariaturExcepteur sint occaecat cu proident, sunter in culpa qui officia deserunt mollit ." },
    { id: "our-mission", title: "Our Mission", desc_1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", desc_2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor." },
    { id: "our-vision", title: "Our Vision", desc_1: "There are many variations of passages of Lorem Ipsum available, but the majority,", desc_2: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." },
]

  constructor() { }

  ngOnInit(): void {
  }

}
