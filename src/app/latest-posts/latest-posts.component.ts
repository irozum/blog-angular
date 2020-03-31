import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost'
import { PostServiceService } from "../post-service.service";

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  posts: Array<BlogPost>

  constructor(private postData: PostServiceService) { }

  ngOnInit(): void {
    this.postData.getPosts(1, null, null).subscribe(data => {
      this.posts = data.slice(0,3)
    })
  }

}
