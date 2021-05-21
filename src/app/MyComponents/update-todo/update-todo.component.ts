import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  @Output() updateTodoToList = new EventEmitter();
  updateTodo: Todo;
  constructor() {
    this.updateTodo = {
      sno:2,
      title:"This is a newly updated todo",
      desc:"This is description of the new form",
      active:true
    }
   }

  ngOnInit(): void {
  }

  sendTodo(){
    this.updateTodoToList.emit(this.updateTodo);
    console.log("updation is done");
  }
  /*updateTodo(){
    const index =this.newTodo.
  }*/
}
