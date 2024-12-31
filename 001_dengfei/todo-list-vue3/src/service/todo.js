import { httpGet, httpPost } from "../libs/http";

export function getTodoService() {
  return httpGet("/get_todo");
}

export function addTodoService(todo) {
  return httpPost("/add_todo", { todo });
}

export function toggleTodoService(id) {
  return httpPost("/toggle_todo", { id });
}

export function removeTodoService(id) {
  return httpPost("/remove_todo", { id });
}
