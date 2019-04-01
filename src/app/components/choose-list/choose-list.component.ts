import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';
import { fromEvent, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
interface ChooseItem {
  desc: String;
  val: String;
}
@Component({
  selector: 'app-choose-list',
  templateUrl: './choose-list.component.html',
  styleUrls: ['./choose-list.component.scss', '../../../assets/styles/3dbutton.scss']
})
export class ChooseListComponent implements OnInit, AfterViewInit {
  @Input() list: ChooseItem[];
  @Input() title: String;
  choosedList: Array<String> = [];
  constructor(private el: ElementRef) {
  }
  ngAfterViewInit() {
  }
  ngOnInit() {
  }
  chooseOne(val) {
    console.log(this.choosedList);
    if (this.choosedList.includes(val)) {
      this.choosedList.splice(this.choosedList.indexOf(val), 1);
      } else {
      this.choosedList.push(val);
      }
  }

}
