import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blog-data/blogs.service';

@Component({
  selector: 'app-blog-v3',
  templateUrl: './blog-v3.component.html',
  styleUrls: ['./blog-v3.component.css']
})
export class BlogV3Component implements OnInit {

  blogItems : any;

  constructor(private blogs:BlogsService) {
    this.blogItems = this.blogs.blogData().slice(26,31)
  }

  ngOnInit(): void {
  }

}
