import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  navList = [{
    url: '/main',
    desc: '首页'
  }, {
    url: '/main/list',
    desc: '列表'
  }, {
    url: '/input/edit',
    desc: '创建'
  }];
  constructor() { }

  ngOnInit() {
  }

}
