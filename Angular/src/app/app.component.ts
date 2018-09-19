import {Component, HostListener} from '@angular/core';
import { GoogleSignInService } from './google-sign-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  lastScrollTop = 0;

  constructor(private router: Router, private googleSignInService: GoogleSignInService) { }

  @HostListener('window:scroll') onScroll() {
    const scrollY = window.scrollY;

    if ( scrollY > this.lastScrollTop) {
      document.getElementById('toolbar').classList.add('hidden');
      this.lastScrollTop = scrollY;
    } else {
      document.getElementById('toolbar').classList.remove('hidden');
      this.lastScrollTop = scrollY;
    }
  }

  public getUserName(): string {
    if(this.googleSignInService.getUsername()) {
      return 'Profile';
    }
    return this.googleSignInService.getUsername();
  }

  public isLoggedIn(): boolean {
    return this.googleSignInService.isLoggedIn();
  }

  public signOut() {
    this.googleSignInService.signOut();
    this.router.navigate(['/']);
  }
}
