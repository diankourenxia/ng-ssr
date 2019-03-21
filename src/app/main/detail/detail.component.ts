import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { baseInfo } from '../database/baseInfo';
import { HttpClient } from '@angular/common/http';
import { Articel } from '../../data-model/article-model';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as hljs from 'highlight.js';
interface ArticleDetail {
  title: String;
  content: String;
  author: String;
  createTime: Date;
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
  @ViewChild('code2') codeElement: ElementRef;

  languages = ['html', 'typescript'];

  detail: ArticleDetail;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     params.get('id')
    //   )
    // ).subscribe((val) => {
    //   console.log(val);
    this.http.get('/api/article/get?title=' + this.route.paramMap.source['value']['title']).subscribe(res => {
      hljs.highlightAuto(res['data'][0].content);
      this.detail = res['data'][0];
      hljs.highlightBlock(this.codeElement.nativeElement);
    });
    // })

  }
  ngAfterViewInit(): void {
    hljs.highlightBlock(this.codeElement.nativeElement);
    // this.codeElement.nativeElement.textContent = 'console.log(b)';
    // hljs.highlightBlock(this.codeElement.nativeElement);
  }
  edit() {
    this.router.navigate(['/input/edit', this.detail.title]);
  }

}
