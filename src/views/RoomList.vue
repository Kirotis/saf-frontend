<template>
    <section class="room-list">
        <v-container class="d-flex flex-column">

        </v-container>
    </section>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'RoomList',
        data: () => ({
            rooms: []
        }),
        created() {
            axios.get('localhost:3100/api/rooms').then(rooms => this.rooms = rooms)
        },
    }
</script>

<style scoped>

</style>