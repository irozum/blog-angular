import { Component, OnInit } from '@angular/core';
import { PostServiceService } from "../post-service.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Array<string> =[]

  constructor(private postData: PostServiceService) { }

  ngOnInit(): void {
    this.postData.getTags().subscribe(data => {
      this.tags = data
    })
  }

}
