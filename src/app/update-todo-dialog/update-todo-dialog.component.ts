import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../Todo';

@Component({
  selector: 'app-update-todo-dialog',
  templateUrl: './update-todo-dialog.component.html',
  styleUrls: ['./update-todo-dialog.component.css']
})
export class UpdateTodoDialogComponent implements OnInit {

  updateTodo: Todo;
  isTitleValid = true;
  isDescValid = true;

  constructor(private dialogRef: MatDialogRef<UpdateTodoDialogComponent>,@Inject(MAT_DIALOG_DATA) private data: Todo) {
    this.updateTodo = data;
    //console.log("repeated call");
    console.log(data);
  
   }
   updateTodoSno(){
    this.isTitleValid = this.updateTodo.title.length > 0;
    this.isDescValid = this.updateTodo.desc.length>0;
    
    // newTodo Contents are changed by two way binding.
    if(this.isTitleValid && this.isDescValid){
      this.dialogRef.close(this.updateTodo);

    }
    //console.log(this.todoSno);
    //this.updateTodoToList.emit(this.updateTodo);
    
   }

  ngOnInit(): void {
  }

}
