import { defineStore } from "pinia";
import { ref } from "vue";


export const userProfile = defineStore("user", () => {
    const email = ref("");
    const posts = ref([]);
})