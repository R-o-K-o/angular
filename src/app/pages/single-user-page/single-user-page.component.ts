import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.css']
})

export class SingleUserPageComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;

      if (state) {
        this.user = state;
      } else {
        this.userService.getById(id).subscribe(response => this.user = response);
      }
    });
  }

}
