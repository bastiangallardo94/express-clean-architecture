import { Request, Response } from 'express';
import { CreateTodo } from '../../application/create-todo';
import { GetAllTodo } from '../../application/get-all-todo';

export class TodoController {

  constructor(
    private readonly createTodo: CreateTodo,
     private readonly getAllTodo: GetAllTodo
     ) { }

  async createNewTodo(req: Request, res: Response) {  
    
    const todo = req.body.description;

    const newTodo = await this.createTodo.run(todo);

    res.status(200).json({
      "message": "Todo created successfully",
      "todo": newTodo
    });

  }

  async getAll(req: Request, res: Response) {

    const todos =  await this.getAllTodo.run();
    console.log('todos',todos);
    
    return res.status(200).json({
      todos
    })
  }

}