import { Todo } from './components/todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './components/todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filtro: fromFiltroActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filterReducer
}
