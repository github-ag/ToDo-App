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
  constructor(private dialogRef: MatDialogRef<UpdateTodoDialogComponent>,@Inject(MAT_DIALOG_DATA) private data: Todo) {
    this.updateTodo = data;
    //console.log("repeated call");
    console.log(data);
  
   }
   updateTodoSno(){
    //console.log(this.todoSno);
    //this.updateTodoToList.emit(this.updateTodo);
    this.dialogRef.close(this.updateTodo);
   }

  ngOnInit(): void {
  }

}
