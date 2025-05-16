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
import { Input } from "@/components/ui/input";

import { SquarePen } from "lucide-vue-next";

const props = defineProps(["task"]);
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <button class="hover:cursor-pointer">
        <SquarePen :size="16" color="purple" />
      </button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogDescription>
          <form class="mt-5">
            <div class="space-y-3 mb-4">
              <Label for="task">Task</Label>
              <Input
                type="text"
                :value="task.title"
                class="rounded-xl w-full py-5 border focus:border-purple-500"
              />
            </div>
            <div class="space-y-3 mb-4">
              <Label for="task">Due Date</Label>
              <Input
                type="text"
                class="rounded-xl w-full py-5 border focus:border-purple-500"
              />
            </div>
            <div class="space-y-2 mb-4">
              <p>Priority</p>
              <div class="flex items-center space-x-5">
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
            </div>
          </form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
</style>