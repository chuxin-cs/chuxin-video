const express = require("express");
const bodyParser = require("body-parser");
const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");

  next();
});

app.get("/get_todo", (req, res) => {
  const todoData = readTodo();

  res.json({
    code: 0,
    msg: "ok",
    data: todoData,
  });
});

app.post("/add_todo", (req, res) => {
  const todo = req.body.todo;

  todo.completed = todo.completed === "false" ? false : true;

  const todoData = readTodo();
  todoData.push(todo);

  writeTodo(todoData);

  res.json({
    code: 0,
    msg: "ok",
  });
});

app.post("/toggle_todo", (req, res) => {
  const id = req.body.id;
  let todoData = readTodo();

  todoData = todoData.map((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }

    return item;
  });

  writeTodo(todoData);

  res.json({
    code: 0,
    msg: "ok",
  });
});

app.post("/remove_todo", (req, res) => {
  const id = req.body.id;
  let todoData = readTodo();

  todoData = todoData.filter((item) => item.id !== id);

  writeTodo(todoData);
  res.json({
    code: 0,
    msg: "ok",
  });
});

function readTodo() {
  return JSON.parse(
    readFileSync(resolve(__dirname, "data/todo.json"), "utf-8") || "[]"
  );
}

function writeTodo(todoData) {
  writeFileSync(resolve(__dirname, "data/todo.json"), JSON.stringify(todoData));
}

app.listen(8080, () => {
  console.log("ok");
});
