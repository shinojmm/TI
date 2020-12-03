import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-textbox',
  templateUrl: './comp-textbox.component.html',
  styleUrls: ['./comp-textbox.component.css']
})
export class CompTextboxComponent implements OnInit {

  @Input() mytext: string;
  constructor() { }

  ngOnInit() {
  }

}
