import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  todoList = [
    {
      content: '后端'
    }
  ];
  didList = [
    {
      title: 'xxx',
      content: 'sdfsdfs',
      author: 'hugh',
      createTime: '2019.2.12',
      categorys: ['学习', '博客']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
