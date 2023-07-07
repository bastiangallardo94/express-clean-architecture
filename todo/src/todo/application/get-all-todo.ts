import { TodoRepository } from "../domain/todo-repository";

export class GetAllTodo {

  constructor(private readonly todoRepository: TodoRepository){}

  run(){
    return this.todoRepository.getAll();
  }

}