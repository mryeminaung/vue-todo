<script setup>
import TodoEmpty from "./TodoEmpty.vue";
import TodoItem from "./TodoItem.vue";

import { useTodoStore } from "@/stores/todo";

const todo = useTodoStore();
</script>

<template>
  <div v-if="todo.completedTasks.length > 0" class="my-7 space-y-3">
    <TodoItem v-for="task in todo.completedTasks" :key="task.id" :task="task" />
  </div>
  <div v-else-if="todo.completedTasks.length === 0 && todo.searchTask">
    <TodoEmpty title="Not Found!" />
  </div>
  <div v-else>
    <TodoEmpty title="No completed tasks yet" />
  </div>
</template>

<style scoped>
</style>