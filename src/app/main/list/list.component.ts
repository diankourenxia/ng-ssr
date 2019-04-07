import { Component, OnInit } from '@angular/core';
import { baseInfo } from '../database/baseInfo';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoList = [];
  didList = [
  ];
  menuList = [
    {
      desc: 'angular',
      val: 'angular'
    }, {
      desc: 'js',
      val: 'js'
    },
    {
      desc: 'css',
      val: 'css'
    }, {
      desc: 'nodejs',
      val: 'nodejs'
    }
  ];
  baseInfo = baseInfo;
  constructor(private http: HttpClient, private titleServe: Title) {
    titleServe.setTitle('hughs前端博客');
  }

  ngOnInit() {
    this.http.get('/api/article/list').subscribe((val) => {
      this.didList = val['data'];
    });
    // this.http.get('/api/todo/list').subscribe((val) => {
    //   console.log(val);
    //   this.todoList = val['data'] || [];
    // });
  }

}
