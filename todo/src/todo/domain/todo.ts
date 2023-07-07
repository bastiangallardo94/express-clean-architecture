import { TODO_STATUS } from "../../shared/domain/constants";
import { TodoDate } from "./todoDate";

export class Todo {

  readonly id: string = Math.random().toString();;

  constructor(
    readonly description: string,
    readonly status: TODO_STATUS,
    readonly created_at?: TodoDate,
    readonly updated_at?: TodoDate,
  ){}

}