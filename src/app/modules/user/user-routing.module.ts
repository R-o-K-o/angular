import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'user_details/:id', component: UserDetailsComponent},
  {path: 'user_posts/:id', component: PostsComponent},
  {path: 'user_posts/:id/post_details/:id', component: PostDetailsComponent},
  {path: 'user_posts/:id/comments/:id', component: CommentsComponent},
  {path: 'user_posts/:id/comments/:id/comment_details/:id', component: CommentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
