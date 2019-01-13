import { Action } from '@ngrx/store';

export const AGREGRAR_TODO = '[TODO] Agregar todo';

export class AgregarTodoAction implements Action{
  readonly type= AGREGRAR_TODO;

  constructor(public texto: string) {}
}

export type Acciones = AgregarTodoAction;
