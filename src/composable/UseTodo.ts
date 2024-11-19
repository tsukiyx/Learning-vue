import { ref, watch } from 'vue';

interface Todos {
  name: string;
  description: string;
}

export const useTodo = () => {
  const userName = ref<string>('');
  const taskName = ref<string>('');
  const taskDscrpt = ref<string>('');
  const todos = ref<Todos[]>([]);
  const storageKey = 'todo-list';
  const userStorageKey = 'user-name';

  const loadUserName = (): void => {
    const saveName = localStorage.getItem(userStorageKey);
    userName.value = saveName ? JSON.parse(saveName) : [];
  };

  const addTask = () => {
    if (!taskName.value.trim() || !taskDscrpt.value.trim()) return;

    todos.value.push({
      name: taskName.value,
      description: taskDscrpt.value,
    });

    taskName.value = '';
    taskDscrpt.value = '';
  };

  const deleteTasks = () => {
    todos.value.splice(0, todos.value.length);
  };

  const deleteTask = (index: number) => {
    todos.value.splice(index, 1);
  };

  const loadTodos = (): void => {
    const savedTodo = localStorage.getItem(storageKey);
    todos.value = savedTodo ? JSON.parse(savedTodo) : [];
  };

  watch(
    userName,
    (newUserName) => {
      localStorage.setItem(userStorageKey, JSON.stringify(newUserName));
    },
  );

  watch(
    todos,
    (newTodos) => {
      localStorage.setItem(storageKey, JSON.stringify(newTodos));
    },
    { deep: true },
  );

  loadUserName();
  loadTodos();

  return {
    userName,
    taskName,
    taskDscrpt,
    todos,
    addTask,
    deleteTasks,
    deleteTask,
  };
};

export type UseTodo = ReturnType<typeof useTodo>;
