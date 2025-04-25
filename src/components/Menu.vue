<!-- eslint-disable -->
<template>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-tooltip v-if="mini" location="right">
          <template #activator="{ props }">
            <v-list-item-icon v-bind="props">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
        <template v-else>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </template>
      </v-list-item>
    </v-list>
  </template>
  
  <script setup>
  defineProps({
    mini: Boolean
  })
  
  const items = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
    { title: 'Usuários', icon: 'mdi-account' },
    { title: 'Configurações', icon: 'mdi-cog' },
  ]
  </script>
  