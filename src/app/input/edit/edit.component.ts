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
    mobile: {
      theme: 'silver',
      plugins: ['autosave', 'lists', 'autolink']
    },
    plugins: `link lists image code table colorpicker fullscreen fullpage help
    textcolor wordcount contextmenu codesample importcss media preview print
    textpattern tabfocus hr directionality imagetools autosave`,
    language_url: '../../../assets/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    toolbar: 'codesample | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft'
      + ' aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo '
      + '| link unlink image code | removeformat | h2 h4 | fullscreen preview styleselect ',
    height: 700,
    codesample_languages: [
      { text: 'JavaScript', value: 'javascript' },
      { text: 'HTML/XML', value: 'markup' },
      { text: 'CSS', value: 'css' },
      // { text: 'TypeScript', value: 'typescript' },
      { text: 'Java', value: 'java' }
    ],
    images_upload_url: '/api/upload',
    image_prepend_url: '/api/upload',
    image_caption: true,
    // paset 插件允许粘贴图片
    paste_data_images: true,
    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
    images_upload_handler: function (blobInfo, success, failure) {
      let xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', '/api/upload');
      xhr.onload = function () {
        let json;
        if (xhr.status !== 200) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);
        if (!json || typeof json.location !== 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        }
        success(json.location);
      };
      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    }

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
      console.log(localStorage.getItem('articleDetail'));
      console.log(JSON.stringify(this.editData));
      if (localStorage.getItem('articleDetail') !== JSON.stringify(this.editData)) {
        console.log('已缓存');
        localStorage.setItem('articleDetail', JSON.stringify(this.editData));

      }
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
