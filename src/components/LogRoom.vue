<template>
    <v-container class="log-room d-flex flex-column-reverse font-weight-bold">
        <div
            v-for="log of logs"
            v-bind:key="log.id"
            class="
                d-flex
                justify-space-between
                white--text
                font-weight-light
                rounded-lg
            "
        >
            <p>
                ({{ new Date(log.date).toLocaleString() }}) {{ log.message || log }}
            </p>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "LogRoom",
    props: {
        logs: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style scoped>
.log-room {
    /* overflow-y: hidden; */
}
</style>
