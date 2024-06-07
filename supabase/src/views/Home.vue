<template>
  <div>
    <div v-if="user">
      <h2 class="welcomehome">Welcome Home!</h2>
      <button @click="signOut" class="signout">Sign Out</button>
    </div>
    <div v-else class="signinbox">
      <h2 class="signinheading">Sign In</h2>
      <form @submit.prevent="signIn" >
        <input v-model="email" type="email" placeholder="Email" required class="email"/>
        <input v-model="password" type="password" placeholder="Password" required class="password"/>
        <button type="submit" class="signin">Sign In</button>
      </form>
      <p>{{ error }}</p>
      <p class="noacc">Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
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

<style>
.email{
  font-size: 1.5rem;
}
.password{
  font-size: 1.5rem;
}
.signin{
  font-size: 1.5rem;
}
.signinheading{
  font-size: 2.6rem;
}
.signup{
  font-size: 1.5rem;
}
.noacc{
  font-size: 1.5rem;
}
.welcomehome{
  font-size:3rem;
}
.signout{
  font-size: 2rem;
}
.signinbox {
  background-color: rgb(168, 219, 238);
  width: 1000px;
  height: 300px;
  align-items: center;
  margin-left: 30rem;
  border-radius: 10px;
}
</style>