<template>
  <div>
    <TodoFrom />
    <TodoList :todos="todoData" />
    <Statisics :count="todoCount" />
  </div>
</template>

<script setup>
import TodoFrom from "./TodoFrom.vue";
import Statisics from "./Statisics.vue";
import TodoList from "./TodoList.vue";

import { useTodoList } from "./todo";
import { provide } from "vue";

const { todoData, todoCount, addTodo, removeTodo, toggleTodo } = useTodoList();

provide("todoMethods", {
  addTodo,
  removeTodo,
  toggleTodo,
});
</script>

<style></style>
