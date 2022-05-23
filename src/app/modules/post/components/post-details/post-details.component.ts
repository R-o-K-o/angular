import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getById(id).subscribe(response => this.post = response);

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
