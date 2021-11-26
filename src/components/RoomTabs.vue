<template>
    <v-container>
        <v-tabs fixed-tabs>
            <v-tab>
                <v-icon> mdi-gamepad-outline </v-icon>
                Control
            </v-tab>
            <v-tab-item>
                <ControlYT
                    :params="params"
                    @changeVolume="changeVolume"
                    @changeMute="mute"
                    @changePause="pause"
                    @editHref="editHref"
                    @prevMoment="prevMoment"
                    @nextMoment="nextMoment"
                />
            </v-tab-item>
            <v-tab>
                <v-icon> mdi-format-list-group </v-icon>
                Room logs
            </v-tab>
            <v-tab-item>
                <LogRoom :logs="params.logs" />
            </v-tab-item>
        </v-tabs>
    </v-container>
</template>

<script>
import LogRoom from "../components/LogRoom.vue";
import ControlYT from "../components/ControlYT.vue";
import controlYTMethodMixin from "../mixins/controlYTMethodMixin";

export default {
    name: "RoomTabs",
    components: {
        LogRoom,
        ControlYT,
    },
    mixins: [controlYTMethodMixin],
    props: {
        params: {
            type: Object,
            default: () => ({
                isPause: true,
                isMuted: false,
                volume: 0,
                logs: [],
            }),
        },
    },
    methods: {
        editHref(val) {
            this.$emit("editHref", val);
        },
        mute(val) {
            this.$emit("changeMute", val);
        },
        pause(val) {
            this.$emit("changePause", val);
        },
    },
};
</script>

<style></style>
