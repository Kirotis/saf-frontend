<template>
    <v-card>
        <v-card-title>{{ titleName }}</v-card-title>
        <v-card-text>
            <v-text-field
                v-model="title"
                ref="title"
                counter="30"
                :rules="rules"
                :loading="loading"
                @keyup.enter="create()"
                outlined
            ></v-text-field>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-between">
            <v-btn color="red" class="ma-2 white--text" @click="close()">
                Close
                <v-icon right dark> mdi-close-circle </v-icon>
            </v-btn>
            <v-btn
                :loading="loading"
                :disabled="loading"
                color="blue-grey"
                class="ma-2 white--text"
                @click="create()"
            >
                Enter
                <v-icon right dark> mdi-view-grid-plus-outline </v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    activated() {
        this.$refs.title.focus();
    },
    data: () => ({
        rules: [
            (v) => (!!v && typeof v === "string") || "Title is requided",
            (v) => v.length <= 30 || "Max 30 characters",
        ],
        title: "",
    }),
    props: {
        loading: {
            type: Boolean,
            default: () => false,
        },
        titleName: {
            type: String,
            default: () => "Enter room name",
        },
    },
    methods: {
        create() {
            if (this.title && this.title.length <= 30)
                return this.$emit("create", this.title);
        },
        close() {
            return this.$emit("close");
        },
    },
};
</script>

<style></style>
