import { Component, OnInit } from '@angular/core';
import { PostServiceService } from "../post-service.service";
import { Router } from '@angular/router'
import { BlogPost } from '../BlogPost'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost
  tags: string

  constructor(private postService: PostServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.postService.getPostbyId(id).subscribe(data => {
      this.blogPost = data
      this.tags = this.blogPost.tags.toString()
    })
  }

  formSubmit() {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim())
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe(() => {
      this.router.navigate(['admin'])
    })
  }

  deletePost() {
    this.postService.deletePostById(this.blogPost._id).subscribe(() => {
      this.router.navigate(['admin'])
    })
  }
}
