<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="$route.name !== 'Login'">
      <router-link class="navbar-brand" to="/">Welcome {{ user && user.email }}!</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/create">Create</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/edit">Edit</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="signout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { supabase } from '@/supabase' // adjust this import to your setup

  const route = useRoute()
  const router = useRouter()
  const user = ref(null)

  onMounted(async () => {
    const { data: { session } } = await supabase.auth.getUser()
    if (session) {
      user.value = session.user
      console.log(user)
    } else {
      supabase.auth.onAuthStateChange((event, session) => {
        user.value = session ? session.user : null
        console.log(user)
      })
    }
  })
  

  const signout = async () => {
    await supabase.auth.signOut()
    router.push({ name: 'Login' })
}
  </script>
  
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #ff7f50; /* Coral color */
}

.navbar-brand {
  color: #fff;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
} 

.navbar-nav {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
}

.nav-link:hover {
  color: #ddd;
}

.nav-item.active .nav-link {
  color: #f8f9fa;
  background-color: transparent;
}
</style>