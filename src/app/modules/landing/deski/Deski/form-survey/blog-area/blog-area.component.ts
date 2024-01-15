import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blog-data/blogs.service';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent implements OnInit {

  blogs : any

  constructor(private blogItems:BlogsService) {
    this.blogs = blogItems.blogData();
  }

  ngOnInit(): void {
  }

}
