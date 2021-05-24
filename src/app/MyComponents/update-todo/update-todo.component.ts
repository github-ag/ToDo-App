import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  @Output() updateTodoToList = new EventEmitter();
  @Input() todoSno!: number;

  updateTodo: Todo;
  constructor() {
    this.updateTodo = {
      sno:4,
      title:"Write updated title",
      desc:"This is description of the new form",
      active:true
    }
  
   }
   

  ngOnInit(): void {
  }
  
  updateTodoSno(){
    this.updateTodo.sno = this.todoSno;
    console.log("todoSno is"+this.todoSno);
    console.log("todo sno which need to be updated "+this.updateTodo.sno);
    this.updateTodoToList.emit(this.updateTodo);
   }
   
   
   /*
  sendUpdatedTodo(){
    console.log("final sno updation"+this.todoSno);
    this.updateTodo.sno = this.todoSno;
    console.log(this.updateTodo);
    this.updateTodoToList.emit(this.updateTodo);
    console.log("updation is done");
  }*/
  
}
