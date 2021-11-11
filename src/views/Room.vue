<template>
  <section class="href-room">
    <v-container
      class="log-room d-flex flex-column-reverse grey darken-3 font-weight-bold"
    >
      <object
        data="https://www.digitalocean.com/community/tutorials/vuejs-vue-socketio"
      >
        Cannot reed link {{ activeUrl }}
      </object>
    </v-container>
    <v-container>
      <v-text-field
        v-model="newHref"
        ref="test"
        hint="Gostinaya"
        label="Room name"
        outlined
        @keyup.enter="editHref"
      ></v-text-field>
    </v-container>
    <LogRoom :logs="logs" />
  </section>
</template>

<script>
import LogRoom from "../components/LogRoom.vue";

export default {
  name: "Room",
  components: {
    LogRoom,
  },
  props: {
    roomName: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    activeUrl: "",
    newHref: "",
    logs: ["Welcome to logs"],
  }),
  created() {
    this.$socket.emit("createRoom", this.roomName);
  },
  sockets: {
    setHref(href) {
      this.activeUrl = href;
    },
    sendLog(log) {
      this.logs.push(log);
    },
    connect() {
      console.log("href connected");
    },
  },
  methods: {
    editHref() {
      console.log(`this.$refs.test.value`, this.$refs.test);
      this.$socket.emit("editHref", this.roomName, this.newHref);
    },
  },
  destroyed() {
    this.$socket.emit("deleteRoom", this.roomName);
  },
};
</script>

<style>
</style>