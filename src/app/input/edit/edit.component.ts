import { Component, OnInit } from '@angular/core';
import { DidItem, LinkItem } from '../../interface/article';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editData: DidItem = {
    author: null,
    title: null,
    des: null,
    content: null,
    tags: [],
    linkList: []
  };
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
  constructor() { }

  ngOnInit() {
  }
  submitEdit() {

  }

}
