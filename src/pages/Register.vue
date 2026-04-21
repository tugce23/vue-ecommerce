<template>
<div>
<h2>Register</h2>
<input v-model="email" placeholder="Email"/>
<input v-model="password" type="password" placeholder="Password"/>
<button @click="register">Register</button>
</div>

</template>
<script lang="ts" setup>
import {ref} from 'vue'
import { useAuthStore } from '../stores/auth.store';

const authStore=useAuthStore()
const email=ref('')
const password=ref('')

const register=()=>{
    authStore.register(email.value,password.value)}
</script>