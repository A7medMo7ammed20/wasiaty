import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../services/blog-data/blogs.service';

@Component({
  selector: 'app-dynamic-blog-details',
  templateUrl: './dynamic-blog-details.component.html',
  styleUrls: ['./dynamic-blog-details.component.css']
})
export class DynamicBlogDetailsComponent implements OnInit {

  getFormData (data : NgForm) {
    console.log(data)
  }

  id:any
  item:any

  constructor(private route:ActivatedRoute,private blogs:BlogsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = this.blogs.blogData().find(item => item.id == this.id)
  }

}
