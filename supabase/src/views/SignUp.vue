<template>
  <div class="signupbox">
    <h2 class="signupheading">Sign Up</h2>
    <form @submit.prevent="signUp">
      <input v-model="email" type="email" placeholder="Email" required class="email"/>
      <input v-model="password" type="password" placeholder="Password" required class="password"/>
      <button type="submit" class="signup">Sign Up</button>
    </form>
    <p>{{ error }}</p>
    <p class="alracc">Already have an account? <router-link to="/signin">Sign In</router-link></p>
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

<style scoped>
.email{
  font-size: 1.5rem;
}
.password{
  font-size: 1.5rem;
}
.signup{
  font-size: 1.5rem;
}
.signupheading{
  font-size: 2.6rem;
  
}
.alracc{
  font-size: 1.5rem;
}
.signupbox{
  background-color: rgb(168, 219, 238);
  width: 1000px;
  height: 300px;
  align-items: center;
  margin-left: 30rem;
  border-radius: 10px;
}
</style>