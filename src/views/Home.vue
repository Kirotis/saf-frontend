<template>
  <v-row class="home">
    <v-hover v-slot="{ hover }">
      <v-col class="indigo lighten-3 justify-center d-flex" cols="12" xs="12" sm="6">
        <v-expand-transition>
          <div
            v-if="hover" 
            class="
              d-flex
              transition-fast-in-fast-out
              indigo lighten-2
              text-h2
              white--text
              
            "
            style="height: 200px"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-col>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-col class="purple lighten-3 justify-center d-flex" cols="12" xs="12" sm="6">
        <v-expand-transition>
          <div
            v-if="hover" 
            class="
              d-flex
              transition-fast-in-fast-out
              purple lighten-2
              text-h2
              white--text
            "
            style="height: 200px"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-col>
    </v-hover>
  </v-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  margin: 0px;
}
</style>
