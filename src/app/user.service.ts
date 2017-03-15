import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from './user'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUser(): Promise<User> {
    return this.http.get('/api/user/').toPromise().then(res => res.json() as User).catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }
}