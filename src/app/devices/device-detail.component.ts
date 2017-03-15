import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Device } from '../device'

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'device-detail',
  templateUrl: './device-detail.component.html',
//   styleUrls: ['./app.component.css'],
})
export class DeviceDetailComponent {
  @Input()
  device: Device;
  uuid: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.uuid = params['uuid'])

  }
}