import { Component, OnInit } from '@angular/core';
import { fromEvent, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        right: '0',
        opacity: 1
      })),
      state('closed', style({
        right: '-40%',
        opacity: 0.5
            })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {
  title = 'ng-pwa';
  isOpen = false;
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
  openClose() {
    this.isOpen = !this.isOpen;
  }
  getCalSize() {
    // const calSize = document.documentElement.clientWidth / 640 * 100;
    // console.log(calSize);
    // document.documentElement.style.fontSize = calSize > 60 ? '60px' : calSize + 'px';
  }
}
