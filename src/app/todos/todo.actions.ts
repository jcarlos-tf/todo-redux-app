import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

//accion
export const limpiarTodos = createAction(
    '[TODO] Limpiar todo');

export const crear = createAction(
    '[TODO] Crea todo',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{ id: number }>()
);

export const editar = createAction(
    '[TODO] editar Todo',
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] toggleAll Todo',
    props<{ completado: boolean }>()
);