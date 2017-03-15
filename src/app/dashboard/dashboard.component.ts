import { Component, Input } from '@angular/core';

import { User } from '../user'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
//   styleUrls: ['./app.component.css'],
})
export class DashboardComponent {
  @Input()
  user: User;
}