import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//NGRX
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './components/todo/todo.reducer';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

//Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosListComponent } from './components/todo/todos-list/todos-list.component';
import { TodosItemComponent } from './components/todo/todos-item/todos-item.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodosItemComponent,
    TodoFooterComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
