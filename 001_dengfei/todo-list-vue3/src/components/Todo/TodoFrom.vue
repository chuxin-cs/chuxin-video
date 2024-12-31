<template>
  <input type="text" placeholder="Please input..." v-model="todoText" />
  <button @click="setTodo">增加</button>
</template>

<script setup>
import { inject, ref } from "vue";
const todoText = ref("");

const { addTodo } = inject("todoMethods");

const setTodo = () => {
  if (todoText.value.length) {
    addTodo(todoText.value);
  }

  todoText.value = "";
};
</script>

<style></style>
