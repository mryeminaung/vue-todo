import { defineStore } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";

export const useTodoStore = defineStore("tasks", () => {
	// state
	const tasks = ref([]);
	const searchTask = ref("");

	onMounted(() => {
		const savedTasks = JSON.parse(localStorage.getItem("tasks"));
		if (savedTasks) {
			tasks.value = savedTasks;
		} else {
			tasks.value = [];
		}
	});

	watch(
		tasks,
		(newTasks) => {
			localStorage.setItem("tasks", JSON.stringify(newTasks));
		},
		{ deep: true },
	);

	// getters
	const filteredTasks = computed(() => {
		if (searchTask) {
			return tasks.value.filter((task) =>
				task.title.toLowerCase().includes(searchTask.value.toLowerCase()),
			);
		} else {
			return todo.tasks;
		}
	});

	const completedTasks = computed(() => {
		return filteredTasks.value.filter((task) => task.isDone);
	});

	const activeTasks = computed(() => {
		return filteredTasks.value.filter((task) => !task.isDone);
	});

	// actions
	const addTask = (task) => {
		tasks.value.push({ ...task, id: uuidv4() });
	};

	const updateTask = (taskId, updatedTask) => {};

	const deleteTask = (taskId) => {
		tasks.value = tasks.value.filter((task) => task.id !== taskId);
	};

	return {
		tasks,
		filteredTasks,
		completedTasks,
		activeTasks,
		searchTask,
		addTask,
		updateTask,
		deleteTask,
	};
});
