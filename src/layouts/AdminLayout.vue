<template>
  <v-navigation-drawer permanent width="240">
    <v-list nav>
      <v-list-item title="Dashboard" to="/admin" />
      <v-list-item title="Products" to="/admin/products"/>
    </v-list>
  </v-navigation-drawer>

    <v-main class="pa-4">
    <router-view />
  </v-main>
</template>
