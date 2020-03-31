import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost'
import { PostServiceService } from "../post-service.service";

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.scss']
})
export class FooterPostsComponent implements OnInit {

  posts: Array<BlogPost>

  constructor(private postData: PostServiceService) { }

  ngOnInit(): void {
    this.postData.getPosts(1, null, null).subscribe(data => {
      this.posts = data.slice(0,3)
    })
  }

}
