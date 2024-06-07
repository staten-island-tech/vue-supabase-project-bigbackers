<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p>{{ error }}</p>
    <p>Already have an account? <router-link to="/signin">Sign In</router-link></p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>