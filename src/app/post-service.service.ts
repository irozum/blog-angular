import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';
import { HttpClient } from '@angular/common/http';

const perPage = 6

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]> {
    let tmpTag = (tag) ? `&tag=${tag}` : ``
    let tmpCategory = (category) ? `&category=${category}` : ``
    return this.http.get<BlogPost[]>(`https://posts--api.herokuapp.com/api/posts?page=${page}&perPage=${perPage}${tmpTag}${tmpCategory}`)
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://posts--api.herokuapp.com/api/posts/${id}`)
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`https://posts--api.herokuapp.com/api/categories`)
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://posts--api.herokuapp.com/api/tags`)
  }

  getAllPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`https://posts--api.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`)
  }

  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://posts--api.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://posts--api.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://posts--api.herokuapp.com/api/posts/${id}`);
  }
}