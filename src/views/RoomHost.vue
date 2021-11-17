<template>
    <section class="href-room">
        <v-container
            class="
                log-room
                d-flex
                flex-column-reverse
                font-weight-bold
                justify-center
                align-center
            "
        >
            <Player :playerVars="{}" :ytid="params.activeUrl" @ready="onYTReady" ref="yt" />
        </v-container>
        <RoomTabs
            :params="params"
            @changeVolume="changeVolume"
            @changeMute="changeMute"
            @changePause="changePause"
            @editHref="editHref"
        />
    </section>
</template>

<script>
import RoomTabs from "../components/RoomTabs.vue";
import roomMixin from "../mixins/roomMixin";
import { Player } from "vue-youtube-iframe-api";

export default {
    name: "RoomHost",
    components: {
        RoomTabs,
        Player,
    },
    props: {
        roomName: {
            type: String,
            required: true,
        },
    },
    mixins: [roomMixin],
    created() {
        this.$socket.emit("createRoom", this.roomName);
    },
    computed: {
        player() {
            return this.$refs.yt.player;
        }
    },
    sockets: {
        setPause(value) {
            this.params.isPause = value;
            value
                ? this.player.playVideo()
                : this.player.pauseVideo()
            const opt = this.player.getMediaReferenceTime()
            console.log(`opt`, opt)
        },
        setMute(value) {
            this.params.isMuted = value;
            value
                ? this.player.mute()
                : this.player.unMute()
        },
        setVolume(value) {
            this.params.volume = value;
            this.player.setVolume(value)
        },
        setHref(href) {
            this.params.activeUrl = href;
        },
        sendLog(log) {
            this.params.logs.push(log);
        },
        setRoomInfo(value) {
            this.params = {...value};
            console.log(`this.params`, this.params)
        },
        roomWasDeleted() {
            this.$router.push("/");
        },
    },
    methods: {
        onYTReady() {
            const yt = this.$refs.yt
            console.log(yt);
            const keys = Object.keys(yt);

            const a = keys.filter((val) => 
                typeof yt[val] === "function"
            );
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
