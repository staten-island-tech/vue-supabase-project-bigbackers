<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p>{{ error }}</p>
    <p>Already have an account? <router-link to="/signin">Sign In</router-link></p>
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

    const signUp = async () => {
      try {
        await authStore.signUp(email.value, password.value)
        router.push('/signin')
      } catch (err) {
        error.value = err.message
      }
    }

    return {
      email,
      password,
      signUp,
      error,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>