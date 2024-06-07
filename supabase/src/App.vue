<!-- <template>
  <div class="app">
    <Navbar />
    <RouterView />
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import { supabase } from './lib/supabaseClient';
import { useAuthStore } from './stores/storee'
import Navbar from './components/Navbar.vue'

import { RouterLink, RouterView } from 'vue-router'

const component = {
  methods: {
    logOut: function () {
      useAuthStore().clearUser()
      router.push('login')
      this.loggedin = false
    },
    login: function () {
      this.loggedin = true
    }
  },
  data() {
    return {
      loggedin: false
    }
  }
}
</script>
<style scoped>

</style> -->


<!-- <script setup>
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { supabase } from './supabase'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script> -->

<!-- <template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template> -->

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
  nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: rgb(253, 220, 210);
  height: 1000px
}
</style>