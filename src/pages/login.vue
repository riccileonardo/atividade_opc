<template>
  <v-card class="pa-4" outlined>
    <v-card-title>Login com Google</v-card-title>
    <v-card-text v-if="userStore.isLoggedIn">
      <v-avatar size="48"><img :src="userStore.user.photoURL" /></v-avatar>
      <div>{{ userStore.user.displayName }}</div>
      <div>{{ userStore.user.email }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="!userStore.isLoggedIn" @click="userStore.login" color="primary">Login</v-btn>
      <v-btn v-else @click="userStore.logout">Logout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>
