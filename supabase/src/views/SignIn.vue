<template>
    <div>
        <h2>Sign In</h2>
        <form @submit.prevent="signIn">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
        </form>
        <p>{{ error }}</p>
        <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>