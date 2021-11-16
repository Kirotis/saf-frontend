<template>
    <v-app id="app">
        <v-app-bar max-height="68px" dark class="d-flex justify-center text-h3">
            <router-link class="link-custom white--text" to="/"> SAF </router-link>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    layout: "default",
};
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
    overflow: hidden;
}
.theme--dark.v-list-item--active:hover::before,
.theme--dark.v-list-item--active::before {
    opacity: none;
}
.link-custom {
    text-decoration: none;
}
.layout__header {
    justify-content: space-around;
}
</style>
