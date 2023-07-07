import { Todo } from "../domain/todo";
import { TodoRepository } from "../domain/todo-repository";

let todoList: Todo[] = [];

export class LocalRepository implements TodoRepository {

  async createTodo(newTodo: Todo): Promise<Todo> {

    const createdTodo = new Todo(newTodo.description, "pendiente");
    console.log('create todo');
    todoList = [...todoList, createdTodo];

    return createdTodo;
  }

  async getAll(): Promise<Todo[]> {
    console.log('todoList get',todoList);
    
    return todoList;
  }
}