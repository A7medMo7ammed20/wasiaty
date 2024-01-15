import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blog-data/blogs.service';

@Component({
  selector: 'app-feature-blog',
  templateUrl: './feature-blog.component.html',
  styleUrls: ['./feature-blog.component.css']
})
export class FeatureBlogComponent implements OnInit {

  blogItems : any

  constructor(private blogs:BlogsService) {
    this.blogItems = this.blogs.blogData().slice(0,3)
  }

  ngOnInit(): void {
  }

}
