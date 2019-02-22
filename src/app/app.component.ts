import { Component, OnInit } from '@angular/core';
import { fromEvent, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-pwa';
  constructor(titleServe: Title, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute))
      .subscribe((event) => {
        console.log(event);
      });

    // this.getCalSize();
    //     fromEvent(window, 'resize')
    //   .pipe(debounceTime(100))
    //   .subscribe((event) => {
    //     this.getCalSize();
    //     });
  }
  getCalSize() {
    // const calSize = document.documentElement.clientWidth / 640 * 100;
    // console.log(calSize);
    // document.documentElement.style.fontSize = calSize > 60 ? '60px' : calSize + 'px';
  }
}
