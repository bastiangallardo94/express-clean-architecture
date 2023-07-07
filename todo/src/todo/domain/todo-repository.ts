import { Todo } from './todo';

export interface TodoRepository {
  createTodo(newTodo: Todo): Promise<Todo>;
  getAll():Promise<Todo[]>
  // deleteTodo(id: string): Promise<Todo>
  // getById(id: string): Promise<Todo>
}