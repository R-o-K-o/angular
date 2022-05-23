import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services";
import {IPostComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})

export class CommentDetailsComponent implements OnInit {
  comment: IPostComment;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostCommentById(id).subscribe(response => this.comment = response);

      // const {state} = history;
      // if (state) {
      //   side effect - (при перезагр.сторінки дані відсутні, а html відмальовується)
      //   this.post = state;
      // } else {
      //   this.userService.getPostById(id).subscribe(response => this.post = response);
      // }
    });
  }

}
