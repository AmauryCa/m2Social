import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import { PostRootComponent } from './post-root/post-root.component';
import {PostService} from './post.service';
import {HttpClientModule} from '@angular/common/http';
import {PostListComponent} from './post-list/post-list.component';
import { CommentsComponent } from './comments/comments.component';

const forumRoutes: Routes = [{
  path: 'post', component: PostRootComponent,
  children: [
    {path: '', component: PostListComponent},
    {path: ':id', component: PostComponent},
    {path: ':id/comments', component: CommentsComponent},
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(forumRoutes),
    HttpClientModule
  ],
  declarations: [PostComponent, PostRootComponent, PostListComponent, CommentsComponent],
  providers: [PostService]
})
export class ForumModule { }
