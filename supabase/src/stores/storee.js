import { defineStore } from 'pinia'
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      currentUser: null
    }
  },
  actions: {
    loadUser(user) {
      this.currentUser = user
    },
    clearUser() {
      this.currentUser = null
    }
  },
  getters: {
    isAuthenticated() {
      return !!this.currentUser
    }
  }
})
