import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '../supabase';
import { useAuthStore } from './auth';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: ref([]),
  }),
  actions: {
    async fetchTodos() {
      const authStore = useAuthStore();
      const user = authStore.user;
      if (!user) {
        return
  };

  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', user.id);

    if (error) {
        throw error
    };
    this.todos.value = data;
    },
    async addTodo(text) {
      const authStore = useAuthStore();
      const user = authStore.user;
      if (!user) return;

      const { data, error } = await supabase
        .from('todos')
        .insert([{ text, user_id: user.id, completed: false }])
        .select('*');

      if (error) {
        throw error
      };
      this.todos.value.push(data[0]);
    },
    async removeTodo(id) {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);

      if (error) {
        throw error
      };
      this.todos.value = this.todos.value.filter(todo => todo.id !== id);
    },
    async markTodoAsCompleted(id) {
      const { error } = await supabase
        .from('todos')
        .update({ completed: true })
        .eq('id', id);

      if (error) {
        throw error
      };
      const todo = this.todos.value.find(todo => todo.id === id);
      if (todo) {
        todo.completed = true;
      }
    },
  },
});