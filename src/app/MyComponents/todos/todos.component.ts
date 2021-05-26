import { JsonPipe } from '@angular/common';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoDialogComponent } from 'src/app/add-todo-dialog/add-todo-dialog.component';
import { FinshedTasksService } from 'src/app/finshed-tasks.service';
import { TodosService } from 'src/app/todos.service';
import { UpdateTodoDialogComponent } from 'src/app/update-todo-dialog/update-todo-dialog.component';
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

  noTask=true;
  //receivedMsg: string;

  
  constructor(private _finishedTasks: FinshedTasksService, private _todosService: TodosService, public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    this.finishedTodos = this._finishedTasks.getFinishedTasks();
    this.todos = this._todosService.getTodos();
    this.num_todos = this._todosService.getNumTodos();
    if(this.num_todos>0)
    this.noTask = false;
    
  }
  openDialog(updateTodo : Todo) {
    const dialogRef = this.dialog.open(UpdateTodoDialogComponent,{
      data: JSON.parse(JSON.stringify(updateTodo)),
      disableClose:true,
      width: "500px",
      minHeight: "300px"
    
    });

    dialogRef.afterClosed().subscribe((result: Todo) => {
      console.log(result);
      if(result){
        this.updateTodoItem(result);
      }
      else{
        console.log("null value");
      }
    });
    
  }
  openAddDialog(){
    const dialogRef = this.dialog.open(AddTodoDialogComponent,{
      //data: JSON.parse(JSON.stringify(addTodo)),
      disableClose:true,
      width: "500px",
      minHeight: "300px"
    
    });

    dialogRef.afterClosed().subscribe((result: Todo) => {
      console.log(result);
      if(result){
        this.addTodoItem(result);
      }
      else{
        console.log("null value");
      }
    });
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
    this.noTask = false;
  
  }
  deleteTodo(deleteTodo: Todo){
   
    this._todosService.deleteTodo(deleteTodo);
    this.todos = this._todosService.getTodos();
    this.num_todos = this._todosService.getNumTodos();
    if(this.num_todos==0){
      this.noTask  = true;
    }
    
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
    if(this.num_todos==0)
    this.noTask = true;
    
  }

}



