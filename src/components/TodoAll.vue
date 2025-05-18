<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoEmpty from "./TodoEmpty.vue";

const tasks = ref([
  {
    id: 1,
    title: "Todo task One",
    date: "May 15, 2025",
    priority: "Medium",
    isDone: false,
  },
  {
    id: 2,
    title: "Todo task Two",
    date: "May 16, 2025",
    priority: "High",
    isDone: true,
  },
  {
    id: 3,
    title: "Todo task Three",
    date: "May 17, 2025",
    priority: "Low",
    isDone: true,
  },
]);
</script>

<template>
  <div v-if="!tasks">
    <TodoEmpty title="No tasks yet" />
  </div>
  <div class="my-7 space-y-3">
    <TodoItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<style scoped>
</style>