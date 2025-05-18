<script setup>
import { Badge } from "@/components/ui/badge";
import TodoAll from "./TodoAll.vue";
import TodoActive from "./TodoActive.vue";
import TodoCompleted from "./TodoCompleted.vue";
import { ref } from "vue";
import { CalendarArrowDown, CalendarArrowUp } from "lucide-vue-next";
import TodoInput from "./TodoInput.vue";

const currentTab = ref("TodoAll");

const tabs = { TodoAll, TodoActive, TodoCompleted };

// Refactored: Tab list for v-for rendering
const tabList = [
  { key: "TodoAll", label: "All", count: 4 },
  { key: "TodoActive", label: "Active", count: 2 },
  { key: "TodoCompleted", label: "Completed", count: 2 },
];

const setCurrentTab = (tab) => {
  currentTab.value = tab;
};

const activeTab = (tab) => {
  return currentTab.value === tab;
};
</script>

<template>
  <div class="my-7 mb-10">
    <div
      class="flex flex-wrap space-y-2 sm:space-y-0 items-center space-x-2 font-bold mb-3"
    >
      <!-- Refactored: Render tabs with v-for -->
      <Badge
        v-for="tab in tabList"
        :key="tab.key"
        :class="[
          'py-1.5 rounded-full transition-colors px-4 text-[14px] hover:cursor-pointer',
          activeTab(tab.key)
            ? 'bg-purple-600 text-white'
            : 'bg-gray-100 text-black hover:bg-purple-200',
        ]"
        @click="setCurrentTab(tab.key)"
      >
        {{ tab.label }}
        <Badge class="ml-2 rounded-full bg-gray-100 text-black text-[12px]">
          {{ tab.count }}
        </Badge>
      </Badge>
    </div>
    <div class="flex items-center justify-end mb-5">
      <div class="flex items-center space-x-2">
        <p>Sort By:</p>
        <div
          class="flex hover:cursor-pointer bg-purple-200 items-center space-x-1 border px-3 py-1.5 rounded-xl"
        >
          <CalendarArrowDown :size="18" />
          <span class="font-semibold text-[15px]">Newest</span>
        </div>
        <div
          class="flex hover:cursor-pointer hover:bg-purple-200 items-center space-x-1 border px-3 py-1.5 rounded-xl"
        >
          <CalendarArrowUp :size="18" />
          <span class="font-semibold text-[15px]">Oldest</span>
        </div>
      </div>
    </div>
    <TodoInput />
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<style scoped>
</style>