<script setup>
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Trash, Calendar } from "lucide-vue-next";
import TodoEdit from "./TodoEdit.vue";
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  parseDate,
  today,
} from "@internationalized/date";
import { toDate } from "reka-ui/date";
import { useTodoStore } from "@/stores/todo";

const todo = useTodoStore();

const df = new DateFormatter("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const rawDate = {
  calendar: { identifier: "gregory" },
  era: "AD",
  year: 2025,
  month: 5,
  day: 23,
};

const taskDueDate = (date) => {
  return df.format(toDate(date));
};

const props = defineProps(["task"]);

// Accent color for checkbox based on priority
const priorityAccent = {
  low: "accent-blue-500",
  medium: "accent-yellow-500",
  high: "accent-red-500",
};

// Badge color for priority
const priorityBadgeClass = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};
</script>

<template>
  <div
    :class="[
      'px-4 py-4 border-2 rounded-2xl hover:border-purple-500 transition-colors duration-300',
      task.isDone && 'bg-gray-100 text-black',
    ]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <Checkbox
          :id="task.id"
          v-model="task.isDone"
          :class="[
            'border-2 rounded-full h-6 w-6',
            priorityAccent[task.priority],
          ]"
        />
        <Label :for="task.id" :class="[task.isDone && 'line-through']">
          {{ task.title }}
        </Label>
      </div>
      <div class="flex items-center space-x-1">
        <TodoEdit :task="task" />
        <button
          class="hover:bg-gray-200 group rounded-full p-1.5 hover:cursor-pointer"
          @click="todo.deleteTask(task.id)"
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
      <Badge
        :class="[
          'capitalize',
          priorityBadgeClass[task.priority] || 'bg-gray-200 text-gray-700',
        ]"
      >
        {{ task.priority }}
      </Badge>
    </div>
  </div>
</template>

<style scoped>
</style>