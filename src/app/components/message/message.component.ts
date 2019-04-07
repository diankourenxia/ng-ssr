import { Component, OnInit } from '@angular/core';
import { Imessage } from './interface';
import { moveUpMotion } from '../../core/animation/move';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [moveUpMotion]
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
