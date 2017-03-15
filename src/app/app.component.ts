import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
    this.user = new User()
  }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.userService.getUser().then(user => this.user = user)
  }
}
