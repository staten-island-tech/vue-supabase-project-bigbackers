<template>
  <div>
    <h1>Your To-Do List</h1>
    <div v-if="user">
      <div>
        <h2>Welcome, {{ user.email }}</h2>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style> 