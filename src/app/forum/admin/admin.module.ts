import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AdminRootComponent} from './admin-root/admin-root.component';
import {PostService} from '../post.service';
import { EditPostComponent } from './edit-post/edit-post.component';

const adminRoutes: Routes = [{
  path: '', component: AdminRootComponent,
  children: [
    {
      path: 'add',
      component: EditPostComponent
    },
    {
      path: 'edit/:id',
      component: EditPostComponent
    }
  ]
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [PostService],
  declarations: [AdminRootComponent, EditPostComponent]
})
export class AdminModule { }
