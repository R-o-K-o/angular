import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  getDetails(): void {
    this.router.navigate([`post/${this.post.id}`], {state: {post: this.post}});
  }
}
