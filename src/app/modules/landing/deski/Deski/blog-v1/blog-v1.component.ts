import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blog-data/blogs.service';

@Component({
  selector: 'app-blog-v1',
  templateUrl: './blog-v1.component.html',
  styleUrls: ['./blog-v1.component.css']
})
export class BlogV1Component implements OnInit {

  blogItems : any;

  constructor(private blogs:BlogsService) {
    this.blogItems = this.blogs.blogData().slice(9,21)
  }

  ngOnInit(): void {
  }

}
