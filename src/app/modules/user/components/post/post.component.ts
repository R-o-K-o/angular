import {Component, Input, OnInit} from '@angular/core';

import {IUserPost} from "../../interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input()
  post: IUserPost

  constructor() { }

  ngOnInit(): void { }
}
