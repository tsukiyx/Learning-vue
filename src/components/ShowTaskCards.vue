<template>
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

const { todos, deleteTask } = useTodo();
const showCards = computed(() => todos.value.length > 0);
</script>
