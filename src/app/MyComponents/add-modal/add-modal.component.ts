import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  @Output() sendTodoToList = new EventEmitter();

  msgToParent = "msgreceivedfromaddmodal";

  currTempMsg = "Hello Todos";
  constructor() { }

  ngOnInit(): void {
  }
  sendTodo(){
    this.sendTodoToList.emit(this.currTempMsg);
  }

}
