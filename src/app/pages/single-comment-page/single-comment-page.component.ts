import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-single-comment-page',
  templateUrl: './single-comment-page.component.html',
  styleUrls: ['./single-comment-page.component.css']
})

export class SingleCommentPageComponent implements OnInit {
  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private commentService: CommentService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;

      if (state) {
        this.comment = state;
      } else {
        this.commentService.getById(id).subscribe(response => this.comment = response);
      }
    });
  }

}
