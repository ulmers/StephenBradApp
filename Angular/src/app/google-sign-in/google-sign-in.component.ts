import { Component, OnInit } from '@angular/core';
import { GoogleSignInService} from '../google-sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit {

  constructor(private router: Router, private googleSignInService: GoogleSignInService) { }

  ngOnInit() {

    const render = this.googleSignInService.renderSignIn;

    // @ts-ignore
    render.then((renderFunction) => {
      renderFunction('google-sign-in', {
        scope: 'email',
        width: 250,
        height: 50,
        longtitle: true,
        theme: 'light',
        onsuccess: (user => {
          this.googleSignInService.setUser();
          this.router.navigate(['/health-rec-form']);
        })
      });
    });
  }

}
