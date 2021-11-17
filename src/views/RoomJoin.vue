<template>
    <section class="href-room">
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

export default {
    name: "RoomJoin",
    components: {
        RoomTabs,
    },
    created() {
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
