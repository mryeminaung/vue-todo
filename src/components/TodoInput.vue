<script setup>
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-vue-next";
import { v4 as uuidv4 } from "uuid";
import { onMounted, onUpdated, reactive, ref } from "vue";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  parseDate,
  today,
} from "@internationalized/date";
import { toDate } from "reka-ui/date";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const newTask = reactive({
  id: "",
  title: "",
  date: today(getLocalTimeZone()),
  priority: "low",
  isDone: false,
});

const df = new DateFormatter("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const taskDueDate = (date) => {
  return df.format(toDate(date));
};

const handleForm = (event) => {
  newTask.id = uuidv4();
  console.log("hit");
};
</script>

<template>
  <div class="mt-3">
    <form @submit.prevent="handleForm">
      <div class="flex items-center justify-between space-x-3">
        <div
          class="relative flex-row-reverse w-full flex items-center justify-between"
        >
          <Input
            type="text"
            v-model.trim="newTask.title"
            placeholder="Add a new task..."
            class="rounded-xl py-5 pr-12 border focus:border-purple-500"
          />
          <button
            type="submit"
            :disabled="!newTask.title"
            :class="[
              'absolute pl-2 mr-1 rounded-xl p-2',
              newTask.title
                ? 'bg-purple-500 hover:cursor-pointer'
                : 'bg-purple-300',
            ]"
          >
            <Plus color="white" class="size-4 text-muted-foreground" />
          </button>
        </div>
        <div
          class="group border py-2 rounded-xl px-3 transition-colors hover:bg-purple-200 hover:cursor-pointer"
        >
          <Popover>
            <PopoverTrigger as-child>
              <div
                class="flex items-center w-[130px] justify-between space-x-4"
              >
                <span class="text-[15px]">{{ taskDueDate(newTask.date) }}</span>
                <CalendarIcon
                  class="ms-auto h-4 w-4 opacity-50 group-hover:text-purple-800"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0 mx-2 mt-2">
              <Calendar
                calendar-label="Date of birth"
                initial-focus
                v-model="newTask.date"
                :weekday-format="'short'"
                class="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div class="flex items-center justify-center space-x-7 mt-4">
        <span hidden>Priority :</span>
        <div class="flex items-center space-x-2">
          <input
            type="radio"
            name="priority"
            v-model="newTask.priority"
            id="low"
            value="low"
            class="w-5 h-5 accent-purple-500"
          />
          <Label for="low" class="text-blue-500">Low</Label>
        </div>
        <div class="flex items-center space-x-2">
          <input
            type="radio"
            name="priority"
            v-model="newTask.priority"
            id="medium"
            value="medium"
            class="w-5 h-5 accent-purple-500"
          />
          <Label for="medium" class="text-yellow-500">Medium</Label>
        </div>
        <div class="flex items-center space-x-2">
          <input
            type="radio"
            name="priority"
            v-model="newTask.priority"
            id="high"
            value="high"
            class="w-5 h-5 accent-purple-500"
          />
          <Label for="high" class="text-red-500">High</Label>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
