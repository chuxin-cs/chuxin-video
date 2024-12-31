<template>
  <div>
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="toggleTodo(todo.id)"
    />
    <span :class="{ completed: todo.completed }"> {{ todo.content }}</span>
    <button @click="removeTodo(todo.id)">删除</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const props = defineProps({
  todo: Object,
});

const { removeTodo, toggleTodo } = inject("todoMethods");
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
