import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getById(id).subscribe(response => this.user = response);

      // const {state} = history;
      //  if (state) {
      //    side effect - (при перезагр.сторінки дані відсутні, а html відмальовується)
      //    this.user = state;
      //  } else {
      //    this.userService.getById(id).subscribe(response => this.user = response);
      //  }
    });
  }

}
