import { Component, OnInit } from '@angular/core';
import {Post} from '../../post';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PostService} from '../../post.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  model: Post = new Post;

  constructor(private route: ActivatedRoute, private service: PostService) {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          if (!isNullOrUndefined(params.get('id'))) {
            this.service.get(+params.get('id')).subscribe(post => this.model = post);
          }
        });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.service.create(this.model);
  }

}
