import { Component, OnInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { DidItem, LinkItem } from '../../interface/article';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChooseListComponent } from '../../components/choose-list/choose-list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss', '../../../assets/styles/3dbutton.scss']
})
export class EditComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('catChoose') catChoose: QueryList<any>;
  @ViewChildren('tagChoose') tagChoose: QueryList<any>;
  editData: DidItem = {
    author: 'hugh',
    title: null,
    desc: '',
    content: '',
    tags: [],
    categories: [],
    linkList: [],
  };
  detail;
  storageInterval: any;
  categoryList = [
    {
      desc: '问题',
      val: 'question',
      isChoosed: false
    },
    {
      desc: '工具',
      val: 'tool',
    }, {
      desc: '生活记录',
      val: 'life',
    },
    {
      desc: 'todo',
      val: 'todo',
    },
    {
      desc: 'did',
      val: 'did',
    },
    {
      desc: '基础',
      val: 'base',
    }
  ];
  tagList = [
    'nodejs', 'angular', 'webpack', 'js', 'mongo', 'vue', 'react', 'Typescript', 'css', 'html'
  ];
  editParam = {
    selector: 'textarea',
    // skin_url: '/skins/lightgray',
    // inline: false,
    // statusbar: false,
    // browser_spellcheck: true,
    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu codesample',
    language_url: '../../../assets/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    toolbar: 'codesample | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft'
      + ' aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo '
      + '| link unlink image code | removeformat | h2 h4',
    height: 700,
    codesample_languages: [
      { text: 'JavaScript', value: 'javascript' },
      { text: 'HTML/XML', value: 'markup' },
      { text: 'CSS', value: 'css' },
      // { text: 'TypeScript', value: 'typescript' },
      { text: 'Java', value: 'java' }
    ]
  };
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.route.paramMap.source['value']['title']) {
      this.http.post('/api/article/get', { title: this.route.paramMap.source['value']['title'] }).subscribe(res => {
        this.detail = res['data'][0];
        Object.assign(this.editData, this.detail);
        this.editData.tags = Array.from(new Set(this.detail.tags));
        this.editData.categories = Array.from(new Set(this.detail.categories));
        this.tagChoose.first.choosedList = this.editData.tags;
        this.catChoose.first.choosedList = this.editData.categories;
      });
    } else if (localStorage.getItem('articleDetail')) {
      setTimeout(() => {
        this.editData = JSON.parse(localStorage.getItem('articleDetail'));
        this.tagChoose.first.choosedList = this.editData.tags;
        this.catChoose.first.choosedList = this.editData.categories;
      }, 0);
    }
  }
  ngAfterViewInit() {
    this.storageInterval = setInterval(() => {
      console.log('已缓存');
      localStorage.setItem('articleDetail', JSON.stringify(this.editData));
    }, 30000);
  }
  submitEdit() {
    this.editData.tags = [];
    this.editData.categories = [];
    this.editData.tags = this.tagChoose.first.choosedList;
    this.editData.categories = this.catChoose.first.choosedList;
    if (this.editData['_id']) {
      this.http.post('/api/article/update',
        this.editData).subscribe(
          res => {
            if (res['success']) {
              localStorage.removeItem('articleDetail');
              this.router.navigate(['/main/list']);
            }
          });
    } else {
      this.http.post('/api/article/add',
        this.editData).subscribe(
          res => {
            if (res['success']) {
              localStorage.removeItem('articleDetail');
              this.router.navigate(['/main/list']);
            }
          });
    }

  }
  chooseTag(item) {
    item.isChoosed = !item.isChoosed;
  }

  ngOnDestroy() {
    clearInterval(this.storageInterval);
  }
}
