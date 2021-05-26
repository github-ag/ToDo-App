import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class FinshedTasksService {

  public finishedTodos: Todo[];
  constructor() { 
    this.finishedTodos = [
      /*
      {
        sno:2,
        title:"sample finished todo title ",
        desc:"sample finished todo desc ",
        active:true
      }*/
    ]
    if(!localStorage.getItem("finishedTodos")){
      localStorage.setItem("finishedTodos",JSON.stringify(this.finishedTodos));
    }
    
  }
  
  getFinishedTasks(){
    let finishedItems: Todo[] = JSON.parse(localStorage.getItem('finishedTodos')||'{}');
    //console.log(todoItems);
    //return this.finishedTodos;
    return finishedItems;
    
  }

  setFinishedTasks(tempTodo: Todo){
    let finishedItems;
    finishedItems = (localStorage.getItem('finishedTodos'));
    finishedItems = JSON.parse(finishedItems||'{}');
    finishedItems = [...finishedItems,tempTodo];
    localStorage.setItem('finishedTodos',JSON.stringify(finishedItems));

    // Deleting From the List
        //console.log(deleteTodo);
        const deleteTodoSno:number = tempTodo.sno;
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


    //this.finishedTodos.push(tempTodo);
  }
}
