import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  @Input()
  comment: IComment;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  getDetails(): void {
    this.router.navigate([`comment/${this.comment.id}`], {state: {comment: this.comment}});
  }
}
