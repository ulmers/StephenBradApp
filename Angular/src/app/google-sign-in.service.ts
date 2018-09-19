import { Injectable } from '@angular/core';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {

  // Really of type GoogleUser
  private currentUser: any;

  gapiPromise: Promise<void> = new Promise(((resolve, reject) => {

    try {
      const script = document.getElementById('gapi');

      if (script) {
        resolve();
      }

      const node = document.createElement('script');
      node.id = 'gapi';
      node.src = 'https://apis.google.com/js/platform.js';
      node.type = 'text/javascript';
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);

      node.onload = () => {
        resolve();
      };
    } catch (e) {
      reject(e);
    }
  }));

  constructor() { }

  public renderSignIn: Promise<(componentName, options) => {}> = new Promise(((resolve, reject) => {
    try {
      this.gapiPromise.then(() => {

        const script = document.getElementById('gapi');

        if (script) {
          resolve(gapi.signin2.render);
        }

        gapi.load('auth2', () => {
          gapi.auth2.init({
            client_id: '901613019984-o8frfhl694ef29lf6517c502b2o11hos',
            fetch_basic_profile: true
          }).then(() => {
            console.log('success');
            resolve(gapi.signin2.render);
          }, () => {
            console.log('failure');
          });
        });
      });
    } catch (e) {
      reject(e);
    }
  }));

  public setUser() {
    this.currentUser = gapi.auth2.getAuthInstance().currentUser.get();
  }

  public isLoggedIn(): boolean {
    if (this.currentUser) {
      return true;
    }
    return false;
  }

  public getUsername() {
    if (this.currentUser) {
      return this.currentUser.getBasicProfile().getEmail();
    }
  }

  public getUserId() {

    if (this.currentUser) {
      const googleSignInPrefix = '';

      return googleSignInPrefix + this.currentUser.getId();
    }

    return null;
  }

  public signOut() {
    this.gapiPromise.then(() => {
      this.currentUser = null;
      gapi.auth2.getAuthInstance().signOut();
    });
  }

}
