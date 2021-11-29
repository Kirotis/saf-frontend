export default {
    methods: {
        prevMoment() {
            this.$emit("prevMoment");
        },
        nextMoment() {
            this.$emit("nextMoment");
        },
        prevVideo() {
            this.$emit("prevVideo");
        },
        nextVideo() {
            this.$emit("nextVideo");
        },
        changeVolume(val) {
            this.$emit("changeVolume", val);
        },
        changeFullScreen() {
            this.$emit("changeFullScreen");
        },
        changeSubtitles() {
            this.$emit("changeSubtitles");
        }
    },
};
