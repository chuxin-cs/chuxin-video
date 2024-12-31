<template>
  <div>
    <TodoItem v-for="item of todos" :key="item.id" :todo="item" />
  </div>
</template>

<script setup>
import TodoItem from "./TodoItem.vue";

const props = defineProps({
  todos: Array,
});
</script>

<style></style>
