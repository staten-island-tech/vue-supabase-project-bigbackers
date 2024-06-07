<template class="wholething">
  <div>
    <h1 class="uh">Your To-Do List</h1>
    <div v-if="user">
      <div>
        <h2 class="welcomemsg">Welcome, {{ user.email }}!!!</h2>
        <button @click="logout" class="logout">Logout</button>
      </div>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" type="text" placeholder="New To-do" required class="insert"/>
        <button type="submit" class="addtodo">Add To-do</button>
      </form>
    <div class="todolist">
      <h2 class="todolistheading">📥 To-do List</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }" class="insertuh">
            {{ todo.text }}
          </span>
          <button @click="removeTodo(todo.id)" class="remove">Remove</button>
          <button @click="markTodoAsCompleted(todo.id)" v-if="!todo.completed" class="complete">Mark as Completed</button>
        </li>
      </ul>
    </div>
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

<style scoped>
.remove{
  margin: 0.2rem;
  font-size: 1.5rem;
  margin-left: 2em;
  /* color: red; */
  background-color: rgb(203, 61, 61);
  color: white;
  border-radius: 10px;
}
.complete{
  margin: 0.2rem;
  font-size: 1.5rem;
  /* color: green; */
  background-color: rgb(29, 145, 29);
  color: white;
  border-radius: 10px;
}
.logout{
  margin-bottom: 0.6rem;
  margin-top: 0rem;
  font-size: 1.5rem;
  background-color: rgb(42, 67, 159);
  color: white;
  border-radius: 10px;
}
.addtodo{
  font-size: 1.5rem;
  background-color: rgb(42, 67, 159);
  color: white;
  border-radius: 10px;
  margin-left: 1rem;
}
.insertuh{
  font-size: 1.5rem;
  font-weight: bold;
}
.insert{
  font-size: 1.5rem;
}
.uh{
  font-size: 3.2rem;
  text-decoration: underline;
}
.welcomemsg{
  font-size: 2rem;
}
.todolist{
  background-image: url("/src/yellow.jpg") ;
  width: 900px;
  height: 300px;
  align-items: center;
  margin-left: 35rem;
  border-radius: 10px;
}
.todolistheading{
  font-size: 2.1rem;
  text-decoration: underline;
}
</style> 