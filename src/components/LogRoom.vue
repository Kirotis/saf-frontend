<template>
  <v-container
    class="log-room d-flex flex-column-reverse grey darken-3 font-weight-bold"
  >
    <p
      class="white--text font-weight-light rounded-lg"
      v-for="log of logs"
      v-bind:key="log"
    >
      {{ log }}
    </p>
  </v-container>
</template>

<script>
export default {
  name: "LogRoom",
  props: {
    logs: {
      type: Array,
      default: () => ["start logs"],
    },
  },
};
</script>

<style scoped>
.log-room {
  /* width: 100%;
  height: 600px;
  padding: 6px; */
  overflow-y: scroll;
}
/* .log-room__item {
  
} */
</style>