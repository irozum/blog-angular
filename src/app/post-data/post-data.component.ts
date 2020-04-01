import { Component, OnInit, Input } from '@angular/core'
import { BlogPost } from '../BlogPost'
import { Comment } from '../Comment'
import { PostServiceService } from "../post-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  post: BlogPost
  querySub: any
  commentName: string
  commentText: string

  constructor(private postService: PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.postService.getPostbyId(params['id']).subscribe(data => {
        this.post = data
        this.post.views++
        this.postService.updatePostById(this.post._id, this.post).subscribe()
      })
    })
  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe()
  }

  submitComment() {
    const comment = new Comment
    comment.author = this.commentName
    comment.comment = this.commentText
    comment.date = new Date().toLocaleDateString()
    this.post.comments.push(comment)
    console.log(this.post)
    this.postService.updatePostById(this.post._id, this.post).subscribe(() => {
      this.commentName = ""
      this.commentText = ""
    })
  }
}
