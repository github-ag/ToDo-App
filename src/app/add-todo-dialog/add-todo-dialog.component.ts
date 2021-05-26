import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css']
})
export class AddTodoDialogComponent implements OnInit {

  addTodo: Todo;
  isTitleValid = true;
  isDescValid = true;

  constructor(private dialogRef: MatDialogRef<AddTodoDialogComponent>,@Inject(MAT_DIALOG_DATA) private data: Todo) {
    this.addTodo = new Todo();
    //console.log("repeated call");
    console.log(data);
  
   }
   addTodoSno(){
    this.isTitleValid = this.addTodo.title.length > 0;
    this.isDescValid = this.addTodo.desc.length>0;
    
    // newTodo Contents are changed by two way binding.
    if(this.isTitleValid && this.isDescValid){
      this.dialogRef.close(this.addTodo);

    }
    //console.log(this.todoSno);
    //this.updateTodoToList.emit(this.updateTodo);
    
   }

  ngOnInit(): void {
  }

}
