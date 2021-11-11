<template>
    <section class="href-room">
        <object data="activeUrl"></object>
        
        <LogRoom :logs="logs"/>
    </section>
</template>

<script>
import LogRoom from "../components/LogRoom.vue"
import socket from "../services/socketService"
// import axios from "axios";

export default {
    name: 'HrefRoom',
    components: {
        LogRoom
    },
    props: {
        roomName: {
            type: String,
            required: true,
        },
        isHost: {
            type: Boolean,
            default: () => false,
        },
    },
    beforeCreate() {

      socket.on('sendLog', (log) =>
          // this.logs.push(log)
          console.log(log)
      )

      socket.on('setHref', (href) =>
        this.activeUrl = href
      );
      setInterval(() => {
          const date = new Date().toLocaleTimeString()
          socket.emit('editHref', this.roomName, date)
      }, 2000)
    },
    data: () => ({
        activeUrl: '',
        logs: [
            '11Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iusto cupiditate quae quas ea asperiores illum enim repellendus fugiat dolor quibusdam, dolore dolorem laudantium sequi nesciunt voluptate beatae ad veniam!',
            'test1',
            '22Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iusto cupiditate quae quas ea asperiores illum enim repellendus fugiat dolor quibusdam, dolore dolorem laudantium sequi nesciunt voluptate beatae ad veniam!',
            'test2',
        ]
    }),
    destroyed() {
        // axios.delete('localhost:3100/api/room/' + this.roomName)
    }
}
</script>

<style>

</style>