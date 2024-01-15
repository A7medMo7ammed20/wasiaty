import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blog-data/blogs.service';

@Component({
  selector: 'app-blog-v4',
  templateUrl: './blog-v4.component.html',
  styleUrls: ['./blog-v4.component.css']
})
export class BlogV4Component implements OnInit {

  blogItems : any;

  constructor(private blogs:BlogsService) {
    this.blogItems = this.blogs.blogData().slice(31,36)
  }

  ngOnInit(): void {
  }

}
