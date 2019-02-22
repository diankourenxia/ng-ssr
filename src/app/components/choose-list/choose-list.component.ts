import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { fromEvent, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
interface ChooseItem {
  desc: String;
  val: String;
}
@Component({
  selector: 'app-choose-list',
  templateUrl: './choose-list.component.html',
  styleUrls: ['./choose-list.component.scss']
})
export class ChooseListComponent implements OnInit, AfterViewInit {
  @Input() list: ChooseItem[];
  @Input() title: String;
  choosedList: Array<String>;
  constructor() {
    this.choosedList = [];
  }
  ngAfterViewInit() {
    const item = document.getElementsByClassName('item');
    console.log(item);
    fromEvent(item, 'click').pipe(
      map(e => e.target['innerText'].replace(/\s*/g, ''))
    ).subscribe((val) => {
      if (this.choosedList.includes(val)) {
        this.choosedList.splice(this.choosedList.indexOf(val), 1);
      } else {
        this.choosedList.push(val);
      }

    });
  }
  ngOnInit() {

  }

}
