import { Injectable } from '@angular/core';
import {isNull} from 'util';


@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {

  constructor() { }

  signIn(gapi): void {

    console.log('sign in');

    gapi.auth2.getAuthInstance().signIn({
      scope: 'email profile',
      prompt: 'content'
    }).then();
  }


}
