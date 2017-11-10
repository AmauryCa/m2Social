import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Component[];
  postId: number;

  constructor(private route: ActivatedRoute, private service: PostService) {
    this.route.paramMap
      .switchMap(
        (params: ParamMap) => {
          this.postId = +params.get('id');
          return this.service.getComments(+params.get('id'));
        }).subscribe( comments => {
            for (const c of comments){
             this.service.getUser(c.userId).subscribe(
               user => c.user = user
             );
            }
            this.comments = comments;
      });
  }

  ngOnInit() {
  }

}
