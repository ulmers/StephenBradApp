import { NgZone, Component, AfterViewInit } from '@angular/core';
import { GoogleSignInService } from '../google-sign-in.service';
import {  Router} from '@angular/router';

declare var gapi: any;

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements AfterViewInit {

  constructor(private router: Router, private googleSignInService: GoogleSignInService) { }

  ngAfterViewInit() {
    this.initGapi();
  }
  public initGapi() {
    console.log('init called');

    const node = document.createElement('script');
    node.src = 'https://apis.google.com/js/platform.js';
    node.type = 'text/javascript';
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
    node.onload = () => {
      this.loadAuth();
    };

  }

  private loadAuth() {
     gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '901613019984-o8frfhl694ef29lf6517c502b2o11hos',
        fetch_basic_profile: true
      }).then(() => {
        console.log('auth2 success');
      }, () => {
        console.log('auth2 failure');
      });

       gapi.signin2.render('google-sign-in', {
         scope: 'email',
         width: 250,
         height: 50,
         longtitle: true,
         theme: 'light',
         onsuccess: (user) => {
           // console.log(gapi.auth2.getAuthInstance().currentUser.get());
           // log('id: ' + gapi.auth2.getAuthInstance().currentUser.get().getId());
           this.router.navigate(['form']);
         },
         onfailure: () => {
           console.log('sign in failure');
         }
       });
    });
  }

}
