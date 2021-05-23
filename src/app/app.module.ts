import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AddModalComponent } from './MyComponents/add-modal/add-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateTodoComponent } from './MyComponents/update-todo/update-todo.component';
import { QuotesComponent } from './MyComponents/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddModalComponent,
    UpdateTodoComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
