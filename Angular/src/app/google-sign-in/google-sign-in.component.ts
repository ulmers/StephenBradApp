import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit {

  constructor() { }

  public ngOnInit() {


  }

  @HostListener('mouseenter') onMouseEnter() {
    document.getElementById('googleSignInImage').setAttribute('src', '/assets/btn_google_signin_light_focus_web.png');
  }

  @HostListener('mouseleave') onMouseLeave() {
    document.getElementById('googleSignInImage').setAttribute('src', '/assets/btn_google_signin_light_normal_web.png');
  }

  @HostListener('mousedown') onMouseDown() {
    document.getElementById('googleSignInImage').setAttribute('src', '/assets/btn_google_signin_light_pressed_web.png');
  }

  @HostListener('mouseup') onMouseUp() {
    document.getElementById('googleSignInImage').setAttribute('src', '/assets/btn_google_signin_light_focus_web.png');
  }

  @HostListener('click') onClick() {

  }

}
