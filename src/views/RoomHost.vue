<template>
  <section class="href-room">
    <v-container
      class="log-room d-flex flex-column-reverse grey darken-3 font-weight-bold"
    >
      <object data="https://www.youtube.com/watch?v=GyStKaAoFnM&t=30s">
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
import roomMixin from "../mixins/roomMixin";

export default {
  name: "RoomHost",
  components: {
    LogRoom,
  },
  props: {
    roomName: {
      type: String,
      required: true,
    },
  },
  created() {
    this.$socket.emit("createRoom", this.roomName);
    document.title = "Room: " + this.roomName;
  },
  mixins: [roomMixin],
  destroyed() {
    this.$socket.emit("deleteRoom", this.roomName);
    this.logs = [];
    this.activeUrl = "";
    this.newHref = "";
  },
};
</script>

<style>
</style>