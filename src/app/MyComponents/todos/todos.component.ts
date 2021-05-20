import { Component, OnInit, Input, Output } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  num_todos: number;
  todos: Todo[];
  //receivedMsg: string;

  constructor() { 
    this.num_todos = 2;
    //this.receivedMsg = "receivedTodoItem";
    this.todos = [
      {
        sno: 1,
        title: "Learn Angular",
        desc: "start learning from YouTube",
        active: true
      },
      {
        sno: 2,
        title: 'Mini-Project',
        desc: 'Make mini-project using angular',
        active: true
      }
    ]
    //Adding an element to todos list
    //console.log(this.todos);
  }

  ngOnInit(): void {
  }

  addTodoItem(newTodo: Todo){
    //this.todos.push(todo)
    console.log("add event is listened");
    console.log(newTodo);
  }

}



