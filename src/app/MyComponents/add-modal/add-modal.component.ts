
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
  isTitleValid = true;
  isDescValid = true;
  tempV = "modal";
  constructor() { 
    console.log("add-todo-constructor");
    this.newTodo = {
      sno:3,
      title:"Enter Title",
      desc:"Enter Description",
      active:true
    }
  }

  ngOnInit(): void {
  }
  
  createNewReference(){
    console.log("new-reference");
    this.newTodo = {
      sno:3,
      title:"",
      desc:"",
      active:true
    }
    
  }
  

  sendTodo(){
    this.isTitleValid = this.newTodo.title.length > 0;
    this.isDescValid = this.newTodo.desc.length>0;
    
    // newTodo Contents are changed by two way binding.
    if(this.isTitleValid && this.isDescValid){
      this.sendTodoToList.emit(this.newTodo);
      console.log("sending is fine");
    }
    else{
      //this.tempV="notModal";
      if(!this.isTitleValid){
        alert("Empty Title");
      }
      else if(!this.isDescValid){
        alert("Empty Description");
      }
    }
  }

  

}
