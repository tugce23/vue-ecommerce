<template>
    <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Email"/>
      <input v-model="password" placeholder="Password"/>
      <button @click="login">Login</button>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import { useAuthStore } from '../stores/auth.store';

const authStore=useAuthStore()
const email=ref('')
const password=ref('')

const login=()=>{
    authStore.login(email.value,password.value)
}

</script>