import { Component, OnInit } from '@angular/core';
import { FinshedTasksService } from 'src/app/finshed-tasks.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-finish-todos',
  templateUrl: './finish-todos.component.html',
  styleUrls: ['./finish-todos.component.css']
})
export class FinishTodosComponent implements OnInit {

  finishedTodos!: Todo[];
  constructor(private _finishedTasks: FinshedTasksService) { }

  ngOnInit(): void {
    this.finishedTodos = this._finishedTasks.getFinishedTasks();
  }

}
