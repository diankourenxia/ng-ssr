import { Component, OnInit } from '@angular/core';
import { baseInfo } from '../database/baseInfo';
import { HttpClient } from '@angular/common/http';
import { Articel } from '../../data-model/article-model';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail = {
    title: 'koa+mongodb初探',
    content: '初步:搭建好koa,mongodb,启动mongodb服务,在koa中使用mongoose链接mongodb',
    author: 'hugh',
    createTime: '2019.2.12',
    categorys: ['koa', 'mongodb', 'mongoose']
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/test/get').subscribe(res => {
      console.log(res);
      // this.detail = res;
    });
  }

}
