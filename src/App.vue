<script setup>
import TodoNav from "./components/TodoNav.vue";
import TodoAll from "./components/TodoAll.vue";
import TodoInput from "./components/TodoInput.vue";
</script>

<template>
  <div class="max-w-3xl mx-auto px-4">
    <TodoNav />
    <TodoInput />
    <TodoAll />
  </div>
</template>

<style scoped>
</style>