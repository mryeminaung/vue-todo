<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";
import { Badge } from "@/components/ui/badge";

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
  <div class="my-4 space-y-3">
    <div class="flex items-center space-x-3 font-bold">
      <Badge class="py-1.5 rounded-full px-4 bg-purple-600 text-[14px]">
        All
        <Badge class="ml-2 rounded-full bg-purple-500 text-[12px]">4</Badge>
      </Badge>
      <Badge
        class="py-1.5 rounded-full px-4 text-black hover:bg-purple-200 text-[14px] bg-gray-100"
      >
        Active
        <Badge class="ml-2 rounded-full bg-gray-100 text-black text-[12px]">
          2
        </Badge>
      </Badge>
      <Badge
        class="py-1.5 rounded-full px-4 text-black hover:bg-purple-200 bg-gray-100 text-[14px]"
      >
        Completed
        <Badge class="ml-2 rounded-full bg-gray-100 text-black text-[12px]">
          2
        </Badge>
      </Badge>
    </div>
    <TodoItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<style scoped>
</style>