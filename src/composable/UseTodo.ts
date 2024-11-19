import { ref } from 'vue';

interface Todos {
  name: string;
  description: string;
}

export const useTodo = () => {
  const userName = ref<string>('');
  const taskName = ref<string>('');
  const taskDscrpt = ref<string>('');
  const todos = ref<Todos[]>([]);

  const addTask = () => {
    if (!taskName.value.trim() || !taskDscrpt.value.trim()) return;

    todos.value.push({
      name: taskName.value,
      description: taskDscrpt.value,
    });

    taskName.value = '';
    taskDscrpt.value = '';
  };

  return {
    userName,
    taskName,
    taskDscrpt,
    todos,
    addTask,
  };
};
