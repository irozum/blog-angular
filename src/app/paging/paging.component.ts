import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  page: number = 1
  @Output() newPage = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  prevPage() {
    if (this.page > 1) {
      this.newPage.emit(--this.page)
    }
  }

  nextPage() {
    this.newPage.emit(++this.page)
  }
}
