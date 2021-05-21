import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class FinshedTasksService {

  public finishedTodos: Todo[];
  constructor() { 
    this.finishedTodos = [
      {
        sno:2,
        title:"sample finished todo title ",
        desc:"sample finished todo desc ",
        active:true
      }
    ]
  }
  
  getFinishedTasks(){
    return this.finishedTodos;
  }

  setFinishedTasks(tempTodo: Todo){
    this.finishedTodos.push(tempTodo);
  }
}
