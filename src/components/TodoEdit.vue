<script setup>
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SquarePen } from "lucide-vue-next";

const props = defineProps(["task"]);
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <button
        class="hover:bg-gray-200 group rounded-full p-1.5 hover:cursor-pointer"
      >
        <SquarePen
          :size="15"
          class="text-gray-500 group-hover:text-purple-500"
        />
      </button>
    </DialogTrigger>
    <DialogContent class="w-[420px]">
      <DialogHeader>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogDescription>
          <form class="mt-5">
            <div class="space-y-3 mb-4">
              <Label for="task">Task</Label>
              <input
                type="text"
                :value="task.title"
                class="rounded-xl w-full py-3 px-2.5 outline focus:outline-purple-500"
              />
            </div>
            <div class="space-y-3 mb-4">
              <Label for="task">Due Date</Label>
              <input
                type="text"
                class="rounded-xl w-full py-3 px-2.5 outline focus:outline-purple-500"
              />
            </div>
            <div class="space-y-2 mb-4">
              <Label for="priority">Priority</Label>
              <div class="flex items-center space-x-5">
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="priority"
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
                    id="medium"
                    value="medium"
                    class="w-5 h-5 accent-purple-500"
                  />
                  <Label for="medium" class="text-yellow-500">Medium</Label>
                </div>
                <div class="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="priority"
                    id="high"
                    value="high"
                    class="w-5 h-5 accent-purple-500"
                  />
                  <Label for="high" class="text-red-500">High</Label>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-end space-x-3 mt-5">
              <Button type="button" variant="secondary">Cancel</Button>
              <Button class="bg-purple-500">Save Changes</Button>
            </div>
          </form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
</style>