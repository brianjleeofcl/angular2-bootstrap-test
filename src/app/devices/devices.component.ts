import { Component, Input } from '@angular/core';

import { User } from '../user'

@Component({
  selector: 'devices',
  templateUrl: './devices.component.html',
//   styleUrls: ['./app.component.css'],
})
export class DevicesComponent {
  @Input()
  user: User;
}