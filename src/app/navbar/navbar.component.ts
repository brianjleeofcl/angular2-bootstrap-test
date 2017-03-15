import { Component, Input } from '@angular/core';

import { User } from '../user'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
//   styleUrls: ['./app.component.css'],
})
export class NavbarComponent {
  @Input()
  user: User;
}
