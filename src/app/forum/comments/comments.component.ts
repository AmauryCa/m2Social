import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Component[];

  constructor(private service: PostService) {
    this.service.getAll().subscribe(comments => this.comments = comments);
  }

  ngOnInit() {
  }

}
