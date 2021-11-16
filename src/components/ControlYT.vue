<template>
    <v-container class="d-inline-flex justify-center align-center">
        <v-col xs="4" sm="3" cols="12">
            <v-btn x-large icon>
                <v-icon> mdi-skip-backward </v-icon>
            </v-btn>
        </v-col>
        <v-col xs="4" sm="3" cols="12">
            <v-btn x-large icon @click.stop="pause">
                <v-icon>
                    {{ params.isPause ? "mdi-pause" : "mdi-play" }}
                </v-icon>
            </v-btn>
        </v-col>
        <v-col xs="4" sm="3" cols="12">
            <v-btn x-large icon>
                <v-icon> mdi-skip-forward </v-icon>
            </v-btn>
        </v-col>
        <v-col xs="12" sm="3" cols="12">
            <v-slider
                v-model="params.volume"
                max="100"
                min="0"
                step="10"
                thumb-label
                ticks
                @change="changeVolume"
            >
                <template v-slot:prepend>
                    <v-icon @click.stop="mute">
                        {{
                            params.isMute
                                ? "mdi-volume-mute"
                                : "mdi-volume-high"
                        }}
                    </v-icon>
                </template>
            </v-slider>
        </v-col>
    </v-container>
</template>

<script>
export default {
    name: "ControlYT",
    props: {
        params: {
            type: Object,
            default: () => ({
                isPause: true,
                isMute: false,
                volume: 25,
            }),
        },
    },
    methods: {
        changeVolume(val) {
            this.$emit("changeVolume", val);
        },
        mute() {
            this.$emit("changeMute", !this.isMute);
        },
        pause() {
            this.$emit("changePause", !this.isPause);
        },
    },
};
</script>

<style></style>
