import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service'
import { Router } from '@angular/router'
import { BlogPost } from '../BlogPost'

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {
  blogPosts: BlogPost[] = []

  constructor(private postData: PostServiceService, private router: Router) { }

  ngOnInit(): void {
    this.postData.getAllPosts().subscribe(data => {
      this.blogPosts = data
    })
  }

  rowClicked(e, id) {
    this.router.navigate(['/admin/post', id])
  }

}
