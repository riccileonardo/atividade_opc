<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      :width="mini ? 64 : 256"
      permanent
      app
      class="glass-nav"
    >
      <v-list-item class="mini-toggle-container">
        <v-list-item-icon>
          <v-btn icon @click="mini = !mini" class="mini-toggle-btn" size="small">
            <v-icon>{{ mini ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>

      <Menu v-if="userStore.isLoggedIn" :mini="mini" />

      <template #append>
        <div class="pa-2" v-if="!mini">
          <v-btn block to="/login" class="glass-btn">
            Login
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="main-background">
      <v-container class="main-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Menu from '@/components/Menu.vue'
import { useUserStore } from '@/stores/user.js'

const drawer = ref(true)
const mini = ref(false)
const userStore = useUserStore()

onMounted(() => {
  userStore.init()
})
</script>

<style scoped>
.main-background {
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  padding: 2rem 0;
  color: #e3f2fd;
}

.glass-nav {
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  backdrop-filter: blur(8px);
  color: #e3f2fd;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.mini-toggle-container {
  justify-content: flex-end;
  padding: 8px;
}
.mini-toggle-btn {
  color: #e3f2fd;
}
</style>
