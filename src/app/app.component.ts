import { Component, OnInit } from '@angular/core';
import { fromEvent, pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-pwa';
  constructor() {
  }
  ngOnInit() {
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
