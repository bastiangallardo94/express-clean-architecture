import express from 'express';
import { todoController } from '../dependencies';

const todoRouter = express.Router();

todoRouter.post('/create', todoController.createNewTodo.bind(todoController));
todoRouter.get('/get-all', todoController.getAll.bind(todoController));

export { todoRouter };