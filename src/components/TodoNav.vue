<script setup>
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>

<template>
  <div class="flex items-center justify-between pt-8 pb-6">
    <h1 class="text-3xl font-bold todoTitle">TaskFlow</h1>
    <div class="flex items-center space-x-3">
      <div class="relative flex items-center">
        <Input
          id="search"
          type="text"
          placeholder="Search tasks..."
          class="pl-8 rounded-xl"
        />
        <span class="absolute pl-2">
          <Search class="size-4 text-muted-foreground" />
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