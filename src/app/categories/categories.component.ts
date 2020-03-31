import { Component, OnInit } from '@angular/core';
import { PostServiceService } from "../post-service.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any> = []

  constructor(private postData: PostServiceService) { }

  ngOnInit(): void {
    this.postData.getCategories().subscribe(data => {
      this.categories = data
    })
  }

}
