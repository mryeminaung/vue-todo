<script setup>
import TodoEmpty from "./TodoEmpty.vue";
import TodoItem from "./TodoItem.vue";

import { useTodoStore } from "@/stores/todo";

const todo = useTodoStore();
</script>

<template>
  <div v-if="todo.activeTasks.length > 0" class="my-7 space-y-3">
    <TodoItem v-for="task in todo.activeTasks" :key="task.id" :task="task" />
  </div>
  <div v-else-if="todo.activeTasks.length === 0 && todo.searchTask">
    <TodoEmpty title="Not Found!" />
  </div>
  <div v-else>
    <TodoEmpty title="All tasks completed - great job!" />
  </div>
</template>

<style scoped>
</style>