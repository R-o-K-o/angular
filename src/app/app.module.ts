import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/frames/header/header.component';
import { NavbarComponent } from './components/frames/navbar/navbar.component';
import { MainComponent } from './components/frames/main/main.component';
import { FooterComponent } from './components/frames/footer/footer.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { SingleUserPageComponent } from './pages/single-user-page/single-user-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddressComponent } from './components/address/address.component';
import { GeoComponent } from './components/geo/geo.component';
import { CompanyComponent } from './components/company/company.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { SinglePostPageComponent } from './pages/single-post-page/single-post-page.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { SingleCommentPageComponent } from './pages/single-comment-page/single-comment-page.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users-page', pathMatch: 'full'},
      {path: 'users-page', component: UsersPageComponent},
      {path: 'user/:id', component: SingleUserPageComponent},
      {path: 'posts-page', component: PostsPageComponent},
      {path: 'post/:id', component: SinglePostPageComponent},
      {path: 'comments-page', component: CommentsPageComponent},
      {path: 'comment/:id', component: SingleCommentPageComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    UsersPageComponent,
    UsersComponent,
    UserComponent,
    SingleUserPageComponent,
    UserDetailsComponent,
    AddressComponent,
    GeoComponent,
    CompanyComponent,
    PostsPageComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    SinglePostPageComponent,
    CommentsPageComponent,
    CommentsComponent,
    CommentComponent,
    SingleCommentPageComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
