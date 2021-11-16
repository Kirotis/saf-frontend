<template>
    <section class="href-room">
        <v-container
            class="
                log-room
                d-flex
                flex-column-reverse
                grey
                darken-3
                font-weight-bold
                justify-center
                align-center
            "
        >
            <Player :ytid="params.activeUrl" @ready="onYTReady" ref="yt" />
        </v-container>
        <v-container>
            <v-text-field
                @keyup.enter="editHref"
                dense
                hint="Gostinaya"
                label="Room name"
                outlined
                ref="test"
                v-model="newHref"
            ></v-text-field>
        </v-container>
        <ControlYT :params="params" @changeVolume="changeVolume" @changeMute="changeMute" @changePause="changePause"/>
        <LogRoom :logs="params.logs" />
    </section>
</template>

<script>
import LogRoom from "../components/LogRoom.vue";
import ControlYT from "../components/ControlYT.vue";
import roomMixin from "../mixins/roomMixin";
import { Player } from "vue-youtube-iframe-api";

export default {
    name: "RoomHost",
    components: {
        LogRoom,
        ControlYT,
        Player,
    },
    props: {
        roomName: {
            type: String,
            required: true,
        },
    },
    created() {
        this.$socket.emit("createRoom", this.roomName);
    },
    mixins: [roomMixin],
    methods: {
        onYTReady() {
            const yt = this.$refs.yt.player;
            console.log(yt);
            const keys = Object.keys(yt);

            const a = keys.filter((val) => {
                return typeof yt[val] === "function";
            });
            console.log(a);
        },
    },
    destroyed() {
        this.$socket.emit("deleteRoom", this.roomName);
        this.logs = [];
        this.activeUrl = "";
        this.newHref = "";
    },
};
</script>

<style></style>
