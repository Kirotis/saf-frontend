<template>
  <v-card>
    <v-card-title> Room name </v-card-title>

    <v-card-text>
      <v-text-field
        v-model="title"
        :rules="rules"
        :loading="loading"
        counter="25"
        hint="Gostinaya"
        label="Room name"
        @keyup.enter="create()"
      ></v-text-field>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="blue-grey"
        class="ma-2 white--text"
        @click="create()"
      >
        Create
        <v-icon right dark> mdi-view-grid-plus-outline </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  data: () => ({
    rules: [(v) => v.length <= 25 || "Max 25 characters"],
    title: "",
  }),
  props: {
      loading: {
          type: Boolean,
          default: () => false,
      }
  },
  methods: {
    create() {
        return this.$emit('create')
    },
  },
};
</script>

<style>
</style>