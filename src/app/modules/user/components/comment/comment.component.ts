import {Component, Input, OnInit} from '@angular/core';

import {IUserPostComment} from "../../interfaces";

@Component({
  selector: 'app-post-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  @Input()
  comment: IUserPostComment

  constructor() { }

  ngOnInit(): void { }
}
