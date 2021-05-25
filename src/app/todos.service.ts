import { Injectable } from '@angular/core';
import { Todo } from './Todo';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todos: Todo[];
  public num_todos: number;
  constructor() { 
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
    if(!localStorage.getItem("todos")){
      localStorage.setItem("todos",JSON.stringify(this.todos));
      localStorage.setItem("numTodos",(this.num_todos.toString()));
    }
  }
  getTodos(){
    let todoList: Todo[] = JSON.parse(localStorage.getItem('todos')||'{}');
    return todoList;
    //return this.todos;
  }
  getNumTodos(){
    let num_todos: number = Number(localStorage.getItem('numTodos'));
    return num_todos;
    //return this.num_todos;
  }
  addTodoItem(newTodo: Todo){

    let todoItems;
    todoItems = (localStorage.getItem('todos'));
    todoItems = JSON.parse(todoItems||'{}');
    todoItems = [...todoItems,newTodo];
    localStorage.setItem('todos',JSON.stringify(todoItems));

    let numTodos:number = Number(localStorage.getItem('numTodos'));
    numTodos += 1;
    localStorage.setItem('numTodos',numTodos.toString())

    /*
    // This sno increment is not working
    this.num_todos = this.num_todos+1;
    newTodo.sno = this.num_todos;

    this.todos.push(newTodo);
    
    console.log("add event is listened");
    //console.log(newTodo);
    console.log(this.todos);
    */
  }
  deleteTodo(deleteTodo: Todo){
    //console.log(deleteTodo);
    const deleteTodoSno:number = deleteTodo.sno;
    const reqIndex:number = deleteTodoSno-1;
    console.log("index to be deleted is"+reqIndex);

    // Resetting all the later index
    let todoItems;
    todoItems = (localStorage.getItem('todos'));
    todoItems = JSON.parse(todoItems||'{}');

    for(let i=reqIndex+1;i<todoItems.length;i++){
      console.log("at "+i);
      todoItems[i].sno -= 1;
    }
    // removing the num_todos by 1.
    let numTodos:number = Number(localStorage.getItem('numTodos'));
    numTodos -= 1;
    localStorage.setItem('numTodos',numTodos.toString())
    //this.num_todos-=1; 

    todoItems.splice(reqIndex,1);
    localStorage.setItem('todos',JSON.stringify(todoItems));
    //console.log(this.todos);
  }
  updateTodoItem(updateTodo: Todo){
    //console.log(updateTodo);
    //console.log("todoDirectly"+todoSno);
    //console.log(currTodo);
    const reqIndex:number=updateTodo.sno-1;
    console.log(reqIndex);

    let todoItems;
    todoItems = (localStorage.getItem('todos'));
    todoItems = JSON.parse(todoItems||'{}');
    todoItems[reqIndex].title=updateTodo.title;
    todoItems[reqIndex].desc = updateTodo.desc;

    localStorage.setItem('todos',JSON.stringify(todoItems));
    //this.todos[reqIndex].title=updateTodo.title;
    //this.todos[reqIndex].desc=updateTodo.desc;
  }



}
