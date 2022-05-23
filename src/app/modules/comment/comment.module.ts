import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentService} from "./services";

import {CommentRoutingModule} from './comment-routing.module';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';

@NgModule({
    declarations: [
        CommentsComponent,
        CommentComponent,
        CommentDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CommentRoutingModule,
    ],
    providers: [CommentService],
})

export class CommentModule { }
