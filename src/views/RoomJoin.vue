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
            "
        >
            link {{ params.activeUrl }}
        </v-container>
        <v-container>
            <v-text-field
                v-model="newHref"
                ref="test"
                hint="Gostinaya"
                label="Room name"
                outlined
                @keyup.enter="editHref"
            ></v-text-field>
        </v-container>
        <LogRoom :logs="params.logs" />
    </section>
</template>

<script>
import LogRoom from "../components/LogRoom.vue";
import roomMixin from "../mixins/roomMixin";

export default {
    name: "RoomHost",
    components: {
        LogRoom,
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
