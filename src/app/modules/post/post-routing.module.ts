import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostResolveService} from "./services";

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'post_details/:id', component: PostDetailsComponent, resolve: {data: PostResolveService}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
