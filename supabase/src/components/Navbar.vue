<!-- <template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="$route.name !== 'Login'">
      <div class="navbar-content">
        <router-link class="navbar-brand" to="/">Welcome {{ user && user.email }}!</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/create">CREATE</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/edit">EDIT</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="signout">LOGOUT</a>
          </li>
        </ul>
      </div>
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
  padding: 2rem;
  background-color: #f5f5f5; 
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.navbar-brand, .nav-link {
  color: #000;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
}

.navbar-brand {
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

</style> -->