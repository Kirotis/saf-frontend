<template>
    <v-container>
        <div class="btn-actions col-12">
            <v-text-field
                v-model="newHref"
                ref="test"
                :hint="'Action href: ' + params.activeUrl"
                label="href"
                outlined
                filled
                dense
                @keyup.enter="editHref"
            ></v-text-field>
        </div>
        <div class="btn-actions col-12 col-xs-12 col-sm-6">
            <div>
                <v-btn x-large icon>
                    <v-icon> mdi-skip-backward </v-icon>
                </v-btn>
            </div>
            <div>
                <v-btn x-large icon @click.stop="pause">
                    <v-icon>
                        {{ params.isPause ? "mdi-pause" : "mdi-play" }}
                    </v-icon>
                </v-btn>
            </div>
            <div>
                <v-btn x-large icon>
                    <v-icon> mdi-skip-forward </v-icon>
                </v-btn>
            </div>
        </div>
        <div class="btn-actions col-12 col-xs-12 col-sm-6">
            <v-slider
                v-model="params.volume"
                max="100"
                min="0"
                step="10"
                @change="changeVolume"
            >
                <template v-slot:prepend>
                    <v-icon @click.stop="mute">
                        {{
                            params.isMuted
                                ? "mdi-volume-mute"
                                : "mdi-volume-high"
                        }}
                    </v-icon>
                </template>
            </v-slider>
        </div>
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
                isMuted: false,
                volume: 25,
            }),
        },
    },
    data: () => ({
        newHref: "",
    }),
    methods: {
        editHref() {
            this.$emit("editHref", this.newHref);
            this.newHref = "";
        },
        changeVolume(val) {
            if (this.params.isMuted) this.mute();
            this.$emit("changeVolume", val);
        },
        mute() {
            this.$emit("changeMute", !this.params.isMuted);
        },
        pause() {
            this.$emit("changePause", !this.params.isPause);
        },
    },
};
</script>

<style scoped>
.btn-actions {
    width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>
