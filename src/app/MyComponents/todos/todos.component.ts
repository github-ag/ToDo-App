import { Component, OnInit, } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  heading: string;

  todos: Todo[];
  constructor() { 
    this.heading = "Abhsihek";
    this.todos = [
      {
        sno: 1,
        title: "Learn Angular",
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
  }

  ngOnInit(): void {
  }

  onClick(todo:Todo) {
    console.log("Description");
  }

}



