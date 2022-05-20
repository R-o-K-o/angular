import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  getDetails(): void {
    this.router.navigate([`user/${this.user.id}`], {state: {user: this.user}});
  }
}
