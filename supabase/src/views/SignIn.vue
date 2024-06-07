<template>
    <div>
      <h1 class="bigheading">Login to see your To-Do List!</h1>
    </div>
    <div class="signinbox">
        <h2 class="signinheading">Sign In</h2>
        <form @submit.prevent="signIn">
            <input v-model="email" type="email" placeholder="Email" required class="email"/>
            <input v-model="password" type="password" placeholder="Password" required class="password"/>
            <button type="submit" class="signin">Sign In</button>
        </form>
        <p>{{ error }}</p>
        <heading class="noacc">Don't have an account? <router-link to="/signup">Sign Up</router-link></heading>
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
.email{
  font-size: 1.5rem;
}
.password{
  font-size: 1.5rem;
}
.signin{
  font-size: 1.5rem;
}
.signinbox {
  background-color: rgb(168, 219, 238);
  width: 1000px;
  height: 300px;
  align-items: center;
  margin-left: 30rem;
  border-radius: 10px;
}
.signinheading{
  font-size: 2.6rem;
  
}
.bigheading{
  font-size: 3rem;
  margin-top: 2rem;
}
.noacc{
  font-size: 1.5rem;
}
</style>