<template>
    <div>
        <h2>Sign In</h2>
        <form @submit.prevent="signIn">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
        </form>
        <p>{{ error }}</p>
        <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const authStore = useAuthStore()
    const router = useRouter()

    const signIn = async () => {
      try {
        const user = await authStore.signIn(email.value, password.value)
        if (user) {
          router.push('/welcome')
        }
      } catch (err) {
        error.value = err.message
      }
    }

    return {
      email,
      password,
      signIn,
      error,
    }
  }
}
</script>

<style scoped>

</style>