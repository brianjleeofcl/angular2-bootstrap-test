import { Component, Input } from '@angular/core';

import { User } from '../user'

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
//   styleUrls: ['./app.component.css'],
})
export class GalleryComponent {
  @Input()
  user: User;
}