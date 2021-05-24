import { JsonPipe } from '@angular/common';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FinshedTasksService } from 'src/app/finshed-tasks.service';
import { TodosService } from 'src/app/todos.service';
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  num_todos!: number;
  finishedTodos!: Todo[];
  todos!: Todo[];
  //receivedMsg: string;

  
  constructor(private _finishedTasks: FinshedTasksService, private _todosService: TodosService) { 

  }

  ngOnInit(): void {
    this.finishedTodos = this._finishedTasks.getFinishedTasks();
    this.todos = this._todosService.getTodos();
    this.num_todos = this._todosService.getNumTodos();
  }

  addTodoItem(newTodo: Todo){

    
    // This sno increment is not working
    this.num_todos = this.num_todos+1;
    newTodo.sno = this.num_todos;

    //this.todos.push(newTodo);
    
    //console.log("add event is listened");
    //console.log(newTodo);
    //console.log(this.todos);
    
    this._todosService.addTodoItem(newTodo);
    this.todos = this._todosService.getTodos();
    this.num_todos = this._todosService.getNumTodos();
  
  }
  deleteTodo(deleteTodo: Todo){
   
    this._todosService.deleteTodo(deleteTodo);
    this.todos = this._todosService.getTodos();
    this.num_todos = this._todosService.getNumTodos();
    
  }
  

  updateTodoItem(updateTodo: Todo){
   
    this._todosService.updateTodoItem(updateTodo);
    this.todos = this._todosService.getTodos();
    this.num_todos = this._todosService.getNumTodos();
  }

  addFinishTodo(tempTodo: Todo){
    this._finishedTasks.setFinishedTasks(tempTodo);

    this.todos = this._todosService.getTodos();
    this.num_todos = this._todosService.getNumTodos();
    
  }

}



