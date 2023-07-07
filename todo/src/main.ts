import bodyParser from "body-parser";
import express from "express";
import { config } from "./shared/infrastructure/config"
import { todoRouter } from "./todo/infrastructure/todo-api/todo-router";

function boostrap(){

  const app = express();

  app.use(bodyParser.json());

  app.use('/todo',todoRouter);

  const { port } = config.server;

  app.listen(port, () => {
      console.log(` esuchando ${port}`);
  });


}

boostrap();