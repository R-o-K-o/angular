import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'post_details/:id', component: PostDetailsComponent},
  {path: 'post_comments/:id', component: CommentsComponent},
  {path: 'post_comments/:id/comment_details/:id', component: CommentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostRoutingModule { }
