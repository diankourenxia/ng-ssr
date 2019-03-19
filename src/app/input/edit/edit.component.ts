import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
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
export class EditComponent implements OnInit, AfterViewInit {
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
    'nodejs', 'angular', 'webpack', 'js', 'mongo', 'vue', 'react'
  ];
  editParam = {
    selector: 'textarea',
    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu codesample',
    language_url: '../../../assets/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    toolbar: 'codesample | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft'
      + ' aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo '
      + '| link unlink image code | removeformat',
    height: 400,
    codesample_languages: [
      { text: 'HTML/XML', value: 'markup' },
      { text: 'JavaScript', value: 'javascript' },
      { text: 'CSS', value: 'css' },
      { text: 'PHP', value: 'php' },
      { text: 'Ruby', value: 'ruby' },
      { text: 'Python', value: 'python' },
      { text: 'Java', value: 'java' },
      { text: 'C', value: 'c' },
      { text: 'C#', value: 'csharp' },
      { text: 'C++', value: 'cpp' }
    ]
  };
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.route.paramMap.source['value']['title']) {
      this.http.get('/api/article/get?title=' + this.route.paramMap.source['value']['title']).subscribe(res => {
        console.log(res);
        this.detail = res['data'][0];
        Object.assign(this.editData, this.detail);
        this.tagChoose.first.choosedList = [...this.detail.tags, ...this.detail.categories];
        // this.detail = res;
      });
    }

  }
  ngAfterViewInit() {
  }
  submitEdit() {
    this.tagChoose.first.choosedList.forEach(item => {
      if (this.tagList.includes(item)) {
        this.editData.tags.push(item);
      } else {
        this.editData.categories.push(item);
      }
    });
    if (this.editData['_id']) {
      this.http.post('/api/article/update',
        this.editData).subscribe(
          res => {
            if (res['success']) {
              this.router.navigate(['/main/list']);
            }
          });
    } else {
      this.http.post('/api/article/add',
        this.editData).subscribe(
          res => {
            if (res['success']) {
              this.router.navigate(['/main/list']);
            }
          });
    }

  }
  chooseTag(item) {
    item.isChoosed = !item.isChoosed;
  }

}
