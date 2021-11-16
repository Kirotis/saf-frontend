export default {
    props: {
        roomName: {
            type: String,
            required: true,
        },
    },
    created() {
        document.title = "Room: " + this.roomName;
    },
    data: () => ({
        newHref: "",
        params: {
            activeUrl: "cYQpo3AHXV8",
            logs: ["Welcome to logs"],
            isMute: false,
            isPause: false,
        },
    }),
    sockets: {
        setHref(href) {
            this.params.activeUrl = href;
        },
        sendLog(log) {
            this.params.logs.push(log);
        },
        roomWasDeleted() {
            this.$router.push("/");
        },
        setPause(value) {
            this.params.isPause = value;
        },
        setMute(value) {
            this.params.isMute = value;
        },
        setVolume(value) {
            this.params.volume = value;
        },
    },
    methods: {
        changePause(val) {
            this.$socket.emit("changePauseVideo", this.roomName, val)
        },
        changeMute(val) {
            this.$socket.emit("changeMute", this.roomName, val)
        },
        changeVolume(val) {
            this.$socket.emit("changeVolume", this.roomName, val)
        },
        editHref() {
            this.$socket.emit("editHref", this.roomName, this.newHref);
        },
    },
};
