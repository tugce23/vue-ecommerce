<template>
  <v-container   class="d-flex align-center justify-center"
    style="height: 100vh;">
<v-card class="mx-auto px-6 py-8" max-width="500">
<v-card-title>Kayıt Ol</v-card-title>
  <v-sheet class="mx-auto" width="400">
    <v-form @submit.prevent="register">
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
      <v-btn class="mt-2" size="large"  color="purple" type="submit" block>Register</v-btn>
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
const register=()=>{
    authStore.register(email.value,password.value)}
     router.push('/')
</script>