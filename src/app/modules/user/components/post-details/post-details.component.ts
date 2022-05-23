import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserPost} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  post: IUserPost;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getPostById(id).subscribe(response => this.post = response);

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
