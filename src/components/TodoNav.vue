<script setup>
import { Search, X } from "lucide-vue-next";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { useTodoStore } from "@/stores/todo";

const todo = useTodoStore();
</script>

<template>
  <div
    class="flex flex-col sm:flex-row items-center justify-between pt-8 space-y-4 mb-5"
  >
    <h1 class="text-3xl font-bold todoTitle">TaskFlow</h1>
    <div class="flex items-center space-x-3">
      <div class="relative group flex items-center w-full md:w-[250px]">
        <input
          autocomplete="off"
          type="text"
          v-model="todo.searchTask"
          placeholder="Search tasks..."
          class="pl-8 outline-2 py-1.5 rounded-xl w-full focus:outline-2 focus:outline-purple-500"
        />
        <span class="absolute pl-2">
          <Search class="size-4 text-muted-foreground" />
        </span>
        <span
          v-if="todo.searchTask"
          @click="todo.searchTask = ''"
          class="hidden group-hover:block hover:cursor-pointer absolute right-0 pr-2"
        >
          <X class="size-4 text-muted-foreground" />
        </span>
      </div>
      <ThemeToggle />
    </div>
  </div>

  <hr class="line" />
</template>

<style scoped>
.todoTitle {
  background: linear-gradient(to left, #e0e0e0, #9c27b0, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.line {
  border: 0;
  height: 4px;
  border-radius: 10px;
  background: linear-gradient(to left, #e0e0e0, #9c27b0, #e0e0e0);
}
</style>