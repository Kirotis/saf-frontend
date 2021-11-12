<template>
  <v-row class="home">
    <v-hover v-slot="{ hover }">
      <v-col
        @click="openDialog('createRoom')"
        class="indigo lighten-3 justify-center align-center d-flex"
        cols="12"
        xs="12"
        sm="6"
      >
        <div
          style="position: absolute"
          class="justify-center align-center d-flex flex-column"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="
                d-flex
                transition-fast-in-fast-out
                indigo
                lighten-2
                white--text
                rounded-lg
                home__icon
              "
            >
              <v-icon style="font-size: 110px" color="indigo lighten-3"
                >mdi-view-grid-plus</v-icon
              >
            </div>
          </v-expand-transition>
          <div class="text-h2">CREATE</div>
        </div>
      </v-col>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-col
        @click="openDialog('joinRoom')"
        class="purple lighten-3 justify-center align-center d-flex"
        cols="12"
        xs="12"
        sm="6"
      >
        <div
          style="position: absolute"
          class="justify-center align-center d-flex flex-column"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="
                d-flex
                transition-fast-in-fast-out
                purple
                lighten-2
                text-h2
                white--text
                rounded-lg
                home__icon
              "
            >
              <v-icon style="font-size: 110px" color="purple lighten-3"
                >mdi-cast-connected</v-icon
              >
            </div>
          </v-expand-transition>
          <div class="text-h2">CONNECT</div>
        </div>
      </v-col>
    </v-hover>
    <v-dialog max-width="400px" v-model="roomCreateOverview">
      <RedirectRoomDialog
        @create="method"
        @close="roomCreateOverview = false"
      />
    </v-dialog>
  </v-row>
</template>

<script>
import RedirectRoomDialog from "../components/RedirectRoomDialog.vue";

export default {
  components: {
    RedirectRoomDialog,
  },
  name: "Home",
  data: () => ({
    roomCreateOverview: false,
    method: () => {}
  }),
  methods: {
    createRoom(room) {
      this.$router.push(`/host/${room}`);
    },
    joinRoom(room) {
      this.$router.push(`/join/${room}`);
    },
    openDialog(methodName) {
      this.method = this[methodName];
      this.roomCreateOverview = true;
    },
  },
};
</script>

<style scoped>
.home__icon {
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  /* position: absolute; */
  width: 200px;
  height: 200px;
}
.home {
  height: 100%;
  margin: 0px;
}
/* @media screen and (min-width: 450px) {
  .home__icon {
   position: inherit;
  }
} */
</style>
