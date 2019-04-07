import { Component, OnInit, Input, Output} from '@angular/core';
import { Imenu } from './tiny-menu.interface';
@Component({
  selector: 'app-tiny-menu',
  templateUrl: './tiny-menu.component.html',
  styleUrls: ['./tiny-menu.component.scss']
})
export class TinyMenuComponent implements OnInit {
  @Input() menuList: Imenu[];
  constructor() { }

  ngOnInit() {
  }

}
