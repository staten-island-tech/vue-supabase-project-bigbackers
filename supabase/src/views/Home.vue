<template>
<div class="whole">
  <div>
    <div v-if="user">
      <h2 class="welcomehome">Welcome Home!</h2>
      <button @click="signOut" class="signout">Sign Out</button>
    </div>
        
    <div v-else class="signinbox">
      <h1 class="bigheading">Login to see your To-Do List!</h1>
      <h2 class="signinheading">Sign In</h2>
      <form @submit.prevent="signIn" >
        <input v-model="email" type="email" placeholder="Email" required class="email"aria-label="inputemail"/>
        <input v-model="password" type="password" placeholder="Password" required class="password" aria-label="inputpassword"/>
        <button type="submit" class="signin">Sign In</button>
      </form>
      <p>{{ error }}</p>
      <heading class="noacc">Don't have an account? <router-link to="/signup">Sign Up</router-link></heading>
    </div>
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
.email{
  font-size: 1.5rem;
}
.password{
  font-size: 1.5rem;
}
.signin{
  font-size: 1.5rem;
  background-color: rgb(29, 54, 145);
  color: white;
  border-radius: 10px;
  margin-left: 1rem;
}
.signinheading{
  font-size: 2.3rem;
  margin-top: 1rem;
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
  background-color: rgb(42, 67, 159);
  color: white;
}
.signinbox {
  background-color: rgb(168, 219, 238);
  width: 1000px;
  height: 300px;
  align-items: center;
  margin-left: 30rem;
  border-radius: 10px;
  margin-top: 0px;
}
.bigheading{
  font-size: 2.6rem;
}
/* .whole{
  background-color: antiquewhite;
  height: 100%;
  width:100%;
} */

</style>