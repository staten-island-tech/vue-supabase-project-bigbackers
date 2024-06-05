<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="$route.name !== 'Login'">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/create">Create</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/edit">Edit</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
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