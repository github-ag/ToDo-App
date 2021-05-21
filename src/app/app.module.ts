import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AddModalComponent } from './MyComponents/add-modal/add-modal.component';
import { FormsModule } from '@angular/forms';
import { FinishTodosComponent } from './MyComponents/finish-todos/finish-todos.component'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddModalComponent,
    
    FinishTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
