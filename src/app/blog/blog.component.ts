import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost'
import { PostServiceService } from "../post-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: Array<BlogPost> = []
  page: number = null
  tag: string = null
  category: string = null
  querySub: any

  constructor(private postData: PostServiceService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if(params['tag']) {
        this.tag = params['tag']
        this.category = null
      }
      if(params['category']) {
        this.category = params['category']
        this.tag = null
      }
      this.getPage(+params['page'] || 1)
    })
  }

  getPage(num) {
    this.postData.getPosts(num, this.tag, this.category).subscribe(data => {
      if (data.length > 0) {
        this.blogPosts = data
        this.page = num
      }
    })
  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe()
  }
}
