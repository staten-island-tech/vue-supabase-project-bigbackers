<template>
  <div>
    <div v-if="user">
      <h2>Welcome Home</h2>
      <button @click="signOut">Sign Out</button>
    </div>
    <div v-else>
      <h2>Sign In</h2>
      <form @submit.prevent="signIn" >
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p>{{ error }}</p>
      <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
    </div>
  </div>
</template>

<script >
import { ref, onMounted } from 'vue'
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

    const signOut = async () => {
      await authStore.signOut()
    }

    onMounted(() => {
      authStore.getUser()
    })

    return {
      email,
      password,
      signIn,
      signOut,
      user: authStore.user,
      error,
    }
  }
}
</script>

<style scoped>

</style>