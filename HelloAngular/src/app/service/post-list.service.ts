import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../_model/post';
import { map, timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  api = `https://jsonplaceholder.typicode.com/posts`;
  constructor(private http: HttpClient) { }
  Gets() {
    return this.http.get<Post[]>(this.api);
  }
  Get(search) {
    let data = { id: search };
    return this.http.get<Post>(this.api, { params: data });
  }
}
