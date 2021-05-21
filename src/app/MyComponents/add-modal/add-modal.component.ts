import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  // Event emitter to tell the parent that new todo has added.
  @Output() sendTodoToList = new EventEmitter();

  // Todo that is sent to parent.
  newTodo : Todo;

  constructor() { 
    console.log("add-todo-constructor");
    this.newTodo = {
      sno:3,
      title:"This is a newly added todo",
      desc:"This is description of the new form",
      active:true
    }
  }

  ngOnInit(): void {
  }
  
  createNewReference(){
    console.log("new-reference");
    this.newTodo = {
      sno:3,
      title:"This is a newly added todo",
      desc:"This is description of the new form",
      active:true
    }
  }
  sendTodo(){

    // newTodo Contents are changed by two way binding.
    this.sendTodoToList.emit(this.newTodo);
    console.log("sending is fine");
  }

  

}
