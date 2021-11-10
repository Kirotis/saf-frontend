<template>
    <section class="href-room">
        
        <LogRoom :logs="logs"/>
    </section>
</template>

<script>
import LogRoom from "../components/LogRoom.vue"

export default {
    name: 'HrefRoom',
    components: {
        LogRoom
    },
    props: {
        roomName: {
            type: String,
            required: true,
        }
    },
    data: () => ({
        logs: [
            '11Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iusto cupiditate quae quas ea asperiores illum enim repellendus fugiat dolor quibusdam, dolore dolorem laudantium sequi nesciunt voluptate beatae ad veniam!',
            'test1',
            '22Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iusto cupiditate quae quas ea asperiores illum enim repellendus fugiat dolor quibusdam, dolore dolorem laudantium sequi nesciunt voluptate beatae ad veniam!',
            'test2',
        ]
    })
}
</script>

<style>

</style>