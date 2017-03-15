import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailComponent } from './devices/device-detail.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    GalleryComponent,
    DevicesComponent,
    DeviceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GalleryComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'device/:uuid',
        component: DeviceDetailComponent
      }
    ]),
    NgbModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
