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
        params: {
            activeUrl: "cYQpo3AHXV8",
            logs: [{message: "Welcome to logs", date: new Date(), id: 'start'}],
            isMuted: false,
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
            this.params.isMuted = value;
        },
        setVolume(value) {
            this.params.volume = value;
        },
        setRoomInfo(value) {
            this.params = {...value};
            console.log(`this.params`, this.params)
        }
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
        editHref(val) {
            this.$socket.emit("editHref", this.roomName, val);
        },
    },
};
