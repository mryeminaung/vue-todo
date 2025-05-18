<script setup>
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Trash, Calendar } from "lucide-vue-next";
import TodoEdit from "./TodoEdit.vue";

const props = defineProps(["task"]);
</script>

<template>
  <div
    :class="[
      'px-4 py-4 border-2 rounded-2xl hover:border-purple-500 transition-colors duration-300',
      task.isDone ? 'bg-gray-100 text-black' : '',
    ]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <Checkbox
          :id="task.title"
          v-model="task.isDone"
          class="accent-purple-500 border-2 rounded-full h-6 w-6"
        />
        <Label :for="task.title" :class="[task.isDone ? 'line-through' : '']">
          {{ task.title }}
        </Label>
      </div>
      <div class="flex items-center space-x-1">
        <TodoEdit :task="task" />
        <button
          class="hover:bg-gray-200 group rounded-full p-1.5 hover:cursor-pointer"
        >
          <Trash :size="15" class="text-gray-500 group-hover:text-red-500" />
        </button>
      </div>
    </div>
    <hr class="my-3" />
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2 text-gray-600">
        <Calendar :size="14" />
        <span class="text-[13px]">{{ task.date }}</span>
      </div>
      <Badge class="bg-yellow-100 text-yellow-800">{{ task.priority }}</Badge>
    </div>
  </div>
</template>

<style scoped>
</style>