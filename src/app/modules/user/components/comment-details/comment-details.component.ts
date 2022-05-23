import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserService} from "../../services";
import {IUserPostComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})

export class CommentDetailsComponent implements OnInit {
  @Input()
  comment: IUserPostComment;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getPostCommentById(id).subscribe(response => this.comment = response);

      // const {state} = history;
      // if (state) {
      //   side effect - (при перезагр.сторінки дані відсутні, а html відмальовується)
      //   this.comment = state;
      // } else {
      //   this.userService.getPostCommentById(id).subscribe(response => this.comment = response);
      // }
    });
  }

}
