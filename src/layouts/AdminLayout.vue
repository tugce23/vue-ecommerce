<template>
    <v-layout>
  <v-navigation-drawer permanent width="240">
    <v-list nav>
      <v-list-item title="Dashboard" to="/admin" />
      <v-list-item title="Products" to="/admin/products"/>
    </v-list>
  </v-navigation-drawer>

    <v-main class="ma-2">
    <router-view />
  </v-main>
  </v-layout>
</template>
