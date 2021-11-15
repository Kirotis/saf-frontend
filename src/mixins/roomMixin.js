export default {
    props: {
        roomName: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        newHref: "",
        params : {
            activeUrl: "cYQpo3AHXV8",
            logs: ["Welcome to logs"],
            isFullScreen: false,
            isPause: false
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
        }
    },
    methods: {
        changeFullScreen(value) {
            this.socket.emit("changeFullScreen", value);
        },
        changePause(value) {
            this.socket.emit("changePause", value);
        },
        editHref() {
            this.$socket.emit("editHref", this.roomName, this.newHref);
        },

    },
};
