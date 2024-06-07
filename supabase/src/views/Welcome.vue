<template>
  <div>
    <h1>Your To-Do List</h1>
    <div v-if="user">
      <div>
        <h2>Welcome, {{ user.email }}</h2>
        <button @click="logout">Logout</button>
      </div>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" type="text" placeholder="New To-do" required />
        <button type="submit">Add To-do</button>
      </form>
      <h2>📥 To-do List</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
            {{ todo.text }}
          </span>
          <button @click="removeTodo(todo.id)">Remove</button>
          <button @click="markTodoAsCompleted(todo.id)" v-if="!todo.completed">Mark as Completed</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth';
import { useTodoStore } from '../stores/todo';
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'TodoView',
  setup() {
    const newTodo = ref('');
    const authStore = useAuthStore();
    const todoStore = useTodoStore();
    const router = useRouter();

    const user = computed(() => authStore.user);
    const todos = computed(() => todoStore.todos.value);

    const addTodo = async () => {
      await todoStore.addTodo(newTodo.value);
      newTodo.value = '';
    };

    const removeTodo = async (id) => {
      await todoStore.removeTodo(id);
    };

    const markTodoAsCompleted = async (id) => {
      await todoStore.markTodoAsCompleted(id);
    };

    const logout = async () => {
      await authStore.signOut();
      router.push('/');
    };

    onMounted(async () => {
      await authStore.getUser();
      if (!authStore.user) {
        router.push('/login');
      } else {
        await todoStore.fetchTodos();
      }
    });

    return {
      newTodo,
      user,
      todos,
      addTodo,
      removeTodo,
      markTodoAsCompleted,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>

</style> 