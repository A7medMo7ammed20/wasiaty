import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blog-data/blogs.service';

@Component({
  selector: 'app-about-blog-area',
  templateUrl: './about-blog-area.component.html',
  styleUrls: ['./about-blog-area.component.css']
})
export class AboutBlogAreaComponent implements OnInit {

  blogItems : any

  constructor(private blogs:BlogsService) {
    this.blogItems = blogs.blogData().slice(3,6)
  }

  ngOnInit(): void {
  }

}
