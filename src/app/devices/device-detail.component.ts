import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Device } from '../device'

import 'rxjs/add/operator/switchMap'
import * as io from 'socket.io-client'

@Component({
  selector: 'device-detail',
  templateUrl: './device-detail.component.html',
//   styleUrls: ['./app.component.css'],
})
export class DeviceDetailComponent {
  @Input()
  device: Device;
  uuid: string;
  socket: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.uuid = params['uuid'])
    this.socket = io.connect('/')
  }

  sendInstructions() {
    this.socket.emit('instruction', 'Do something specified here')
  }
}