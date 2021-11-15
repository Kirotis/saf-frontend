<template>
  <section class="href-room">
    <v-container
      class="log-room d-flex flex-column-reverse grey darken-3 font-weight-bold"
    >
      link {{ params.activeUrl }}
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
    <LogRoom :logs="params.logs" />
  </section>
</template>

<script>
import axios from "axios";
import LogRoom from "../components/LogRoom.vue";
import roomMixin from "../mixins/roomMixin";

export default {
  name: "RoomHost",
  components: {
    LogRoom,
  },
  created() {
    const onError = (err) => {
      console.error(err);
      this.$router.push("/");
    };
    axios
      .get(`/api/room/${this.roomName}`)
      .then(({data}) => {
        console.log(`data`, data)
        if (data) {
          this.$socket.emit("joinRoom", this.roomName);
          this.logs.push(...data.logs);
          this.activeUrl = data.href;
        } else {
          onError("redirect");
        }
      })
      .catch(onError);
    document.title = "Room: " + this.roomName;
  },
  mixins: [roomMixin],
  destroyed() {
    this.$socket.emit("leaveRoom", this.roomName);
    this.logs = [];
    this.activeUrl = "";
    this.newHref = "";
  },
};
</script>

<style>
</style>