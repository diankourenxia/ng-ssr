import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DidItem, LinkItem } from '../../interface/article';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ChooseListComponent } from '../../components/choose-list/choose-list.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, AfterViewInit {
  @ViewChildren('catChoose') catChoose: QueryList<any>;
  @ViewChildren('tagChoose') tagChoose: QueryList<any>;
  editData: DidItem = {
    author: null,
    title: null,
    desc: '',
    content: '',
    tags: [],
    categories: [],
    linkList: [],
  };
  categoryList = [
    {
      desc: '问题',
      val: 'question',
      isChoosed: false
    },
    {
      desc: '工具',
      val: 'tool',
      isChoosed: false
    }, {
      desc: '生活记录',
      val: 'life',
      isChoosed: false
    },
    {
      desc: 'todo',
      val: 'todo',
      isChoosed: false
    },
    {
      desc: 'did',
      val: 'did',
      isChoosed: false
    }
  ];
  tagList = [
    'nodejs', 'angular', 'webpack', 'js', 'mongo', 'vue', 'react'
  ];
  editParam = {
    selector: 'textarea',
    plugins: 'codesample',
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
    ],
    toolbar: 'codesample'
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  submitEdit() {
    console.log(this.catChoose);
    console.log(this.tagChoose);
    this.http.post('/api/article/add',
      this.editData).subscribe(
        res => {
          console.log(res);
        });
  }
  chooseTag(item) {
    item.isChoosed = !item.isChoosed;
  }

}
