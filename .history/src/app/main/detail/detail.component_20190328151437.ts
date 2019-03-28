import { Component, OnInit, AfterViewInit } from '@angular/core';
import { baseInfo } from '../database/baseInfo';
import { HttpClient } from '@angular/common/http';
import { Articel } from '../../data-model/article-model';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as hljs from 'highlight.js';
import * as Prism from '../../../assets/js/prism.js';
interface ArticleDetail {
  title: String;
  content: String;
  author: String;
  createTime?: Date;
  desc?: String;
  updateTime?: Date;
  categorys?: Array<String>;
  tags?: Array<String>;
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss', './default.css']
})
export class DetailComponent implements OnInit, AfterViewInit {
  detail: ArticleDetail;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.http.get('/api/article/get?title=' + this.route.paramMap.source['value']['title']).subscribe(res => {
      this.detail = res['data'][0];
    });
  }
  ngAfterViewInit(): void {
    // this.el.nativeElement.querySelector('#code');
    Prism.highlightAll();
    // console.log(this.el.nativeElement.querySelector('.code'));
    // Prism.highlightElement(this.el.nativeElement.querySelector('#code')[0]);
  }
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
