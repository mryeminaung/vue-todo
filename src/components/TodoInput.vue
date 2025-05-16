<script setup>
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-vue-next";
import { v4 as uuidv4 } from "uuid";
import { onMounted, ref } from "vue";

const newTask = ref("");
const tasks = ref("");

const handleForm = () => {
  console.log({
    id: uuidv4(),
    title: newTask.value,
    date: new Date().toLocaleDateString(),
    priority: "Medium",
    isDone: false,
  });
  newTask.value = "";
};
</script>

<template>
  <div class="my-3">
    <form @submit.prevent="handleForm">
      <div class="relative flex-row-reverse flex items-center justify-between">
        <Input
          type="text"
          v-model.trim="newTask"
          placeholder="Add a new task..."
          class="rounded-xl w-full py-5 border focus:border-purple-500"
        />
        <button
          type="submit"
          :class="[
            'absolute pl-2 mr-2 rounded-full p-2',
            newTask ? 'bg-purple-500 hover:cursor-pointer' : 'bg-purple-300',
          ]"
        >
          <Plus color="white" class="size-4 text-muted-foreground" />
        </button>
      </div>
      <div class="flex items-center space-x-2 mt-3">
        <p>Priority :</p>
        <div class="flex items-center space-x-2">
          <Input
            type="radio"
            name="priority"
            id="low"
            class="w-5 accent-purple-500"
          />
          <Label for="low" class="text-blue-500">Low</Label>
        </div>
        <div class="flex items-center space-x-2">
          <Input
            type="radio"
            name="priority"
            id="medium"
            class="w-5 accent-purple-500"
          />
          <Label for="medium" class="text-yellow-500">Medium</Label>
        </div>
        <div class="flex items-center space-x-2">
          <Input
            type="radio"
            name="priority"
            id="high"
            class="w-5 accent-purple-500"
          />
          <Label for="high" class="text-red-500">High</Label>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
