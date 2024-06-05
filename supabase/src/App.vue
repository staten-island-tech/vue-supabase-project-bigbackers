<template>
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

</style>


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