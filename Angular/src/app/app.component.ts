import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  lastScrollTop = 0;

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
}
