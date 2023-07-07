import { CreateTodo } from "../application/create-todo";
import { GetAllTodo } from "../application/get-all-todo";
import { LocalRepository } from "./local-repository";
import { TodoController } from "./todo-api/todo-controller";

const localRepository = new LocalRepository();
const createTodo = new CreateTodo(localRepository); 
const getAllTodo = new GetAllTodo(localRepository);

export const todoController = new TodoController(createTodo,getAllTodo)