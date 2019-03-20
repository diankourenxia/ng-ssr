import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { baseInfo } from '../database/baseInfo';
import { HttpClient } from '@angular/common/http';
import { Articel } from '../../data-model/article-model';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss', './default.css']
})
export class DetailComponent implements OnInit {
  @ViewChild('code') codeElement: ElementRef;

  languages = ['html', 'typescript'];

  detail = {
    title: 'koa+mongodb初探',
    content: '初步:搭建好koa,mongodb,启动mongodb服务,在koa中使用mongoose链接mongodb',
    author: 'hugh',
    createTime: '2019.2.12',
    categorys: ['koa', 'mongodb', 'mongoose']
  };
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    tinymce.init({
      selector: '#myeditablediv',  // change this value according to your HTML
      inline: true
    });
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     params.get('id')
    //   )
    // ).subscribe((val) => {
    //   console.log(val);
    this.http.get('/api/article/get?title=' + this.route.paramMap.source['value']['title']).subscribe(res => {
      hljs.highlightAuto(res['data'][0].content);
      this.detail = res['data'][0];
      // hljs.highlightBlock(this.codeElement.nativeElement);
    });
    // })

  }
  edit() {
    this.router.navigate(['/input/edit', this.detail.title]);
  }

}
