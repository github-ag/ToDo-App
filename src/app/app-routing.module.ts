import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishTodosComponent } from './MyComponents/finish-todos/finish-todos.component';

import { TodosComponent } from './MyComponents/todos/todos.component';


const routes: Routes = [
  { path: 'home', component: TodosComponent },
  { path: 'finished', component: FinishTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
