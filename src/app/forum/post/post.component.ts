import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {User} from '../user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  author: User;

  constructor(private route: ActivatedRoute, private service: PostService) {
    this.route.paramMap
      .switchMap(
        (params: ParamMap) => {
          return this.service.get(+params.get('id'));
        }).subscribe( post => this.initComponent(post));
  }

  initComponent(post: Post) {
    this.post = post;
    this.service.getUser(post.userId).subscribe(
      author => this.author = author
    );
  }

  ngOnInit() {
  }

}
