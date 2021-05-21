import { JsonPipe } from '@angular/common';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FinshedTasksService } from 'src/app/finshed-tasks.service';
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  num_todos: number;
  finishedTodos!: Todo[];
  todos: Todo[];
  //receivedMsg: string;

  constructor(private _finishedTasks: FinshedTasksService) { 
    this.num_todos = 2;
    //this.receivedMsg = "receivedTodoItem";
    this.todos = [
      {
        sno: 1,
        title: "Learn-Angular",
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
    
    localStorage.setItem("todoList",JSON.stringify(this.todos))
  }

  ngOnInit(): void {
    this.finishedTodos = this._finishedTasks.getFinishedTasks();
  }

  addTodoItem(newTodo: Todo){

    // This sno increment is not working
    this.num_todos = this.num_todos+1;
    newTodo.sno = this.num_todos;

    this.todos.push(newTodo);
    
    console.log("add event is listened");
    //console.log(newTodo);
    console.log(this.todos);
  }
  deleteTodo(deleteTodo: Todo){
    //console.log(deleteTodo);
    const deleteTodoSno:number = deleteTodo.sno;
    const reqIndex:number = deleteTodoSno-1;
    console.log("index to be deleted is"+reqIndex);

    // Resetting all the later index
    for(let i=reqIndex+1;i<this.todos.length;i++){
      this.todos[i].sno -= 1;
    }
    // removing the num_todos by 1.
    this.num_todos-=1; 

    this.todos.splice(reqIndex,1);
    console.log(this.todos);
  }
  

  updateTodoItem(updateTodo: Todo){
    console.log(updateTodo);
    //console.log("todoDirectly"+todoSno);
    //console.log(currTodo);
    const reqIndex:number=updateTodo.sno-1;
    console.log(reqIndex);
    this.todos[reqIndex].title=updateTodo.title;
    this.todos[reqIndex].desc=updateTodo.desc;
  }

  addFinishTodo(tempTodo: Todo){
    const finishTodoSno:number = tempTodo.sno;
    const reqIndex:number = finishTodoSno-1;
    //console.log("index to be deleted is"+reqIndex);

    // Resetting all the later index
    for(let i=reqIndex+1;i<this.todos.length;i++){
      this.todos[i].sno -= 1;
    }
    // removing the num_todos by 1.
    this.num_todos-=1; 

    this.todos.splice(reqIndex,1);
    this._finishedTasks.setFinishedTasks(tempTodo);
  }
}



localStorage