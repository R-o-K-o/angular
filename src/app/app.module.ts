import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/frames/header/header.component';
import { MainComponent } from './components/frames/main/main.component';
import { FooterComponent } from './components/frames/footer/footer.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { CommetsPageComponent } from './pages/commets-page/commets-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    UsersPageComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsPageComponent,
    CommetsPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
