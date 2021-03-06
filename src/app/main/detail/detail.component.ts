import { Component, OnInit, AfterViewInit, SecurityContext, AfterViewChecked } from '@angular/core';
import { baseInfo } from '../database/baseInfo';
import { HttpClient } from '@angular/common/http';
import { Articel } from '../../data-model/article-model';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as Prism from '../../../assets/js/prism.js';
import { DomSanitizer } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

interface ArticleDetail {
  title: string;
  content: string;
  author: string;
  createTime?: Date;
  desc?: string;
  updateTime?: Date;
  categorys?: Array<string>;
  tags?: Array<string>;
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss', './default.css']
})
export class DetailComponent implements OnInit, AfterViewChecked {
  detail: ArticleDetail = {
    title: '',
    content: '',
    author: '',
    createTime: null
  };
  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router, private sanitizer: DomSanitizer,
    private titleServe: Title) {
    console.log(this.route.paramMap.source['value']['title']);
    titleServe.setTitle(this.route.paramMap.source['value']['title']);
  }

  ngOnInit() {
    this.http.post('/api/article/get', { title: this.route.paramMap.source['value']['title'] }).subscribe(res => {
      this.detail = res['data'][0];
      // this.sanitizer.sanitize(SecurityContext.HTML, 'detail.content');
    });
  }
  ngAfterViewChecked(): void { Prism.highlightAll(); }
  edit() {
    this.router.navigate(['/input/edit', this.detail.title]);
  }
  delete() {
    this.http.post('/api/article/delete', { title: this.route.paramMap.source['value']['title'] }).subscribe(res => {
      if (res['success']) {
        this.router.navigate(['/main/list']);
      }
    });
  }

}
