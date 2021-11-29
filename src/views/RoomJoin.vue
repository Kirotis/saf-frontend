<template>
    <section class="href-room">
        <RoomTabs
            :params="params"
            @changeVolume="changeVolume"
            @changeMute="changeMute"
            @changePause="changePause"
            @editHref="editHref"
            @prevMoment="prevMoment"
            @nextMoment="nextMoment"
            @prevVideo="prevVideo"
            @nextVideo="nextVideo"
            @changeFullScreen="changeFullScreen"
            @changeSubtitles="changeSubtitles"
        />
    </section>
</template>

<script>
import RoomTabs from "../components/RoomTabs.vue";
import roomMixin from "../mixins/roomMixin";

export default {
    name: "RoomJoin",
    components: {
        RoomTabs,
    },
    created() {
        this.$socket.emit("joinRoom", this.roomName);
    },
    activated() {
        this.$socket.emit("joinRoom", this.roomName);
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

<style></style>
