<template>
  <v-app id="app">
    <v-app-bar max-height="68px" dark class="d-flex justify-center text-h3">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      SAF
    </v-app-bar>
    <v-main>
      <!-- <v-navigation-drawer temporary absolute v-model="drawer">
        <v-list nav dense>
          <v-list-item-group no-action v-model="group">

            <router-link class="nuxt-link-custom" to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home page</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link class="nuxt-link-custom" to="/to-do">
              <v-list-item eager>
                <v-list-item-icon>
                  <v-icon>mdi-checkbox-marked-circle-plus-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>To do page</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link class="nuxt-link-custom" to="/login">
              <v-list-item eager>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item>
            </router-link>

            <router-link class="nuxt-link-custom" to="/register">
              <v-list-item eager>
                <v-list-item-icon>
                  <v-icon>mdi-account-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Register</v-list-item-title>
              </v-list-item>
            </router-link>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "default",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

body{
  background-color: #4c4c4c;
}

.theme--dark.v-list-item--active:hover::before,
.theme--dark.v-list-item--active::before {
  opacity: none;
}
.nuxt-link-custom {
  text-decoration: none;
}
.layout__header {
  justify-content: space-around;
}
</style>
