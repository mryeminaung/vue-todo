<script setup>
import { ListTodo } from "lucide-vue-next";

const props = defineProps(["title"]);
</script>

<template>
  <div class="flex flex-col items-center text-center justify-center h-64 space-y-2">
    <span class="border p-4 rounded-full bg-purple-200">
      <ListTodo :size="30" class="text-purple-500" />
    </span>
    <h2 class="text-xl font-semibold">{{ title }}</h2>
    <p>Add your first task using the input field above.</p>
  </div>
</template>

<style scoped>
</style>