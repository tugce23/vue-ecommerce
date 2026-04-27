
<template>
    <v-container   class="d-flex align-center justify-center"
    style="height: 100vh;">
<v-card class="mx-auto px-6 py-8" max-width="500">
<v-card-title>Giriş Yap</v-card-title>
  <v-sheet class="mx-auto" width="400">
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="email"
       variant="outlined"
        label="Email"
      ></v-text-field>
      <v-text-field
       v-model="password"
       variant="outlined"
        label="Password"
      ></v-text-field>
      <v-btn class="mt-2" size="large"  color="success" type="submit" block>Login</v-btn>
      <div class="d-flex justify-center"> Ya da </div>
        <v-btn class="mt-2" size="large"  color="primary" block to="/register">Register</v-btn>
    </v-form>
  </v-sheet>
</v-card>
  </v-container>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from 'vue-router'
const authStore=useAuthStore()
const email=ref('')
const password=ref('')
const router = useRouter()
const login=()=>{
    authStore.login(email.value,password.value)
    router.push('/')
}

</script>