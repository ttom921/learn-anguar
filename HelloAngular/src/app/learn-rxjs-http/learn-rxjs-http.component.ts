import { Component, OnInit } from '@angular/core';
import { PostListService } from '../service/post-list.service';
import { Post } from '../_model/post';
import { map } from 'rxjs/operators';
import { __assign } from 'tslib';

@Component({
  selector: 'learn-rxjs-http',
  templateUrl: './learn-rxjs-http.component.html',
  styleUrls: ['./learn-rxjs-http.component.scss']
})
export class LearnRxjsHttpComponent implements OnInit {
  posts: Post[] = [];
  post: Post;
  constructor(private postListService: PostListService) {

  }

  ngOnInit() {
    this.postListService.Gets()
      .subscribe(data => {
        this.posts = data as Post[];
      });
    this.postListService.Get(1).pipe(

    )
      .subscribe(data => {
        //console.log(data);
        this.post = data[0];
      });

  }

}
