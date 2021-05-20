import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  @Output() sendTodoToList = new EventEmitter();

  // Todo that is sent to parent.
  newTodo : Todo;
  msgToParent = "msgreceivedfromaddmodal";

  constructor() { 
    this.newTodo = {
      sno:3,
      title:"This is a newly added todo",
      desc:"This is description of the new form",
      active:true
    }
  }

  ngOnInit(): void {
  }
  sendTodo(){
    // Here we want to change the content of newTodo by fetching data from the forms.
    this.sendTodoToList.emit(this.newTodo);
    console.log("sending is fine");
  }

}
