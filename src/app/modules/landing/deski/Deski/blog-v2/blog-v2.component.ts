import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blog-data/blogs.service';

@Component({
  selector: 'app-blog-v2',
  templateUrl: './blog-v2.component.html',
  styleUrls: ['./blog-v2.component.css']
})
export class BlogV2Component implements OnInit {

  blogItems : any;

  constructor(private blogs:BlogsService) {
    this.blogItems = this.blogs.blogData().slice(21,25)
  }

  ngOnInit(): void {
  }

}
