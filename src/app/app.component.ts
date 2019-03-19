import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
interface FlashSchema {
  content: String;
  status?: String;
  type: String;
}
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
        animate('0.28s')
      ]),
      transition('closed => open', [
        animate('0.28s')
      ]),
    ]),
    trigger('activeTag', [
      state('true', style({
        'z-index': 1000,
        'box-shadow': 'rgba(93, 130, 173, 0.45) 4px -2px 6px 1px inset'
      })),
      state('false', style({
        'z-index': 998
      })),
      transition('true => false', [
        animate('0.2s')
      ]),
      transition('false => true', [
        animate('0.2s')
      ]),
    ]),
    trigger('activeContent', [
      transition(':enter', [
        style({ 'transform': 'translateY(-100%)' }),
        animate('0.3s', style({ 'transform': 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ 'transform': 'translateY(0)' }),
        animate('0.3s', style({ 'transform': 'translateY(100%)' }))
      ])
    ])
  ]

})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ng-pwa';
  isOpen = false;
  flashWidth = '-40%';
  flashTypeList = [
    {
      title: '待办',
      isActive: false,
      contentPosition: 'next',
      type: 'todo'
    },
    {
      title: '待学',
      isActive: false,
      contentPosition: 'next',
      type: 'tostudy'
    },
    {
      title: 'blog',
      isActive: false,
      contentPosition: 'next',
      type: 'blog'
    }
  ];
  flashList = [];
  flashData: FlashSchema = {
    content: '',
    type: 'todo'
  };
  @ViewChild('flash')
  flashEl: ElementRef;
  constructor(titleServe: Title, private router: Router, private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
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
  openClose(item) {
    if (this.isOpen && item.isActive) {
      this.isOpen = !this.isOpen;
      item.isActive = false;
    } else {
      this.flashData.type = item.type;
      this.getFlashList(item.type);
      this.isOpen = true;
      item.isActive = 'false';
      item.contentPosition = 'on';
      this.flashTypeList.filter(items => {
        return items.title !== item.title;
      }).forEach(itemss => {
        itemss.isActive = false;
        itemss.contentPosition = 'next';
      });
    }
  }
  getCalSize() {
    // const calSize = document.documentElement.clientWidth / 640 * 100;
    // console.log(calSize);
    // document.documentElement.style.fontSize = calSize > 60 ? '60px' : calSize + 'px';
  }
  getFlashList(type) {
    this.http.post('/api/flash/list', { type: type }).subscribe((val) => {
      this.flashList = val['data'];
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.flashList, event.previousIndex, event.currentIndex);
  }
  onSubmit() {
    if (this.flashData.content) {
      this.http.post('/api/flash/add',
        this.flashData).subscribe(
          res => {
            if (res['success']) {
              this.flashData.content = '';
              this.getFlashList(this.flashData.type);
            } else {
              this.router.navigate(['/login']);
            }
          });
    } else {
    }
  }
  ngAfterViewInit() {
    console.log(this.flashEl);
  }
}
