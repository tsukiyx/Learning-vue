<template>
  <div class="m-2 flex flex-col gap-3 border-black border p-3 w-max justify-center">
    <label for="task-name">Name</label>
    <input type="text" v-model="taskName" placeholder="Task Name" />
    <label for="task-dscrp">Description</label>
    <input type="text" v-model="taskDscrpt" placeholder="Task Description" />
    <button type="button" class="addBtn" @click="addTask">Add Task</button>
    <button type="button" class="deleteBtn" @click="deleteTasks">Delete All Task</button>
  </div>

  <section
    v-if="showCards"
    class="flex m-4 flex-wrap p-4 justify-center h-auto gap-3 border-cyan-400 border rounded-lg"
  >
    <div
      class="flex flex-col rounded-sm border border-purple-400 p-4 w-[260px] h-auto bg-red-300 gap-3"
      v-for="(todo, index) in todos"
      :key="index"
    >
      <h2 class="font-bold text-xl">{{ todo.name }}</h2>
      <p><strong>Description</strong>: {{ todo.description }}</p>
      <button
        class="rounded-xl bg-gray-700 text-white p-1"
        type="button"
        @click="deleteTask(index)"
      >
        Delete
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTodo } from '@/composable/UseTodo';
import { computed } from 'vue';

const { taskName, taskDscrpt, addTask, deleteTasks, todos, deleteTask } = useTodo();
const showCards = computed(() => todos.value.length > 0);
</script>

<style scoped>
input {
  width: 300px;
  border: 2px solid #333;
  border-radius: 5px;
  padding: 4px;
}

button {
  border-radius: 4px;
  padding: 8px;
  font-weight: 600;
}

.addBtn {
  background-color: #997ff7;
}

.deleteBtn {
  background-color: #cf82fa;
}
</style>
