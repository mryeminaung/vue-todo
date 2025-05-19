<script setup>
import TodoItem from "./TodoItem.vue";
import TodoEmpty from "./TodoEmpty.vue";
import { useTodoStore } from "@/stores/todo";
import { computed } from "vue";

const todo = useTodoStore();
</script>

<template>
  <div v-if="todo.filteredTasks.length > 0" class="my-7 space-y-3">
    <TodoItem v-for="task in todo.filteredTasks" :key="task.id" :task="task" />
  </div>
  <div v-else-if="todo.filteredTasks.length === 0 && todo.searchTask">
    <TodoEmpty title="Not Found!" />
  </div>
  <div v-else>
    <TodoEmpty title="No tasks yet" />
  </div>
</template>

<style scoped>
</style>