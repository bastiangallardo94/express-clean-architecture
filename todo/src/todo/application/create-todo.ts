import { Todo } from "../domain/todo";
import { TodoRepository } from "../domain/todo-repository";

export class CreateTodo {

  constructor(readonly todoRepository: TodoRepository) { }

  run(newTodo: Todo) {
    return this.todoRepository.createTodo(newTodo);
  }

}