export default {
    props: {
        roomName: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        activeUrl: "ypbgCOdg9Q",
        newHref: "",
        logs: ["Welcome to logs"],
        isFullScreen: false,
        isPause: false
    }),
    sockets: {
        setHref(href) {
            this.activeUrl = href;
        },
        sendLog(log) {
            this.logs.push(log);
        },
        roomWasDeleted() {
            this.$router.push("/");
        },
        setFullScreen(value) {
            this.isFullScreen = value;
        },
        setPause(value) {
            this.isPause = value;
        },
        onCueVideoById(val) {
            return this.$refs.yt.player.cueVideoById(val);
        }, onLoadVideoById(val) {
            return this.$refs.yt.player.loadVideoById(val);
        }, onCueVideoByUrl(val) {
            return this.$refs.yt.player.cueVideoByUrl(val);
        }, onLoadVideoByUrl(val) {
            return this.$refs.yt.player.loadVideoByUrl(val);
        }, onPlayVideo(val) {
            return this.$refs.yt.player.playVideo(val);
        }, onPauseVideo(val) {
            return this.$refs.yt.player.pauseVideo(val);
        }, onStopVideo(val) {
            return this.$refs.yt.player.stopVideo(val);
        }, onClearVideo(val) {
            return this.$refs.yt.player.clearVideo(val);
        }, onGetVideoBytesLoaded(val) {
            return this.$refs.yt.player.getVideoBytesLoaded(val);
        }, onGetVideoBytesTotal(val) {
            return this.$refs.yt.player.getVideoBytesTotal(val);
        }, onGetVideoLoadedFraction(val) {
            return this.$refs.yt.player.getVideoLoadedFraction(val);
        }, onGetVideoStartBytes(val) {
            return this.$refs.yt.player.getVideoStartBytes(val);
        }, onCuePlaylist(val) {
            return this.$refs.yt.player.cuePlaylist(val);
        }, onLoadPlaylist(val) {
            return this.$refs.yt.player.loadPlaylist(val);
        }, onNextVideo(val) {
            return this.$refs.yt.player.nextVideo(val);
        }, onPreviousVideo(val) {
            return this.$refs.yt.player.previousVideo(val);
        }, onPlayVideoAt(val) {
            return this.$refs.yt.player.playVideoAt(val);
        }, onSetShuffle(val) {
            return this.$refs.yt.player.setShuffle(val);
        }, onSetLoop(val) {
            return this.$refs.yt.player.setLoop(val);
        }, onGetPlaylist(val) {
            return this.$refs.yt.player.getPlaylist(val);
        }, onGetPlaylistIndex(val) {
            return this.$refs.yt.player.getPlaylistIndex(val);
        }, onGetPlaylistId(val) {
            return this.$refs.yt.player.getPlaylistId(val);
        }, onLoadModule(val) {
            return this.$refs.yt.player.loadModule(val);
        }, onUnloadModule(val) {
            return this.$refs.yt.player.unloadModule(val);
        }, onSetOption(val) {
            return this.$refs.yt.player.setOption(val);
        }, onMute(val) {
            return this.$refs.yt.player.mute(val);
        }, onUnMute(val) {
            return this.$refs.yt.player.unMute(val);
        }, onIsMuted(val) {
            return this.$refs.yt.player.isMuted(val);
        }, onSetVolume(val) {
            return this.$refs.yt.player.setVolume(val);
        }, onGetVolume(val) {
            return this.$refs.yt.player.getVolume(val);
        }, onSeekTo(val) {
            return this.$refs.yt.player.seekTo(val);
        }, onGetPlayerMode(val) {
            return this.$refs.yt.player.getPlayerMode(val);
        }, onGetPlayerState(val) {
            return this.$refs.yt.player.getPlayerState(val);
        }, onGetPlaybackRate(val) {
            return this.$refs.yt.player.getPlaybackRate(val);
        }, onSetPlaybackRate(val) {
            return this.$refs.yt.player.setPlaybackRate(val);
        }, onGetAvailablePlaybackRates(val) {
            return this.$refs.yt.player.getAvailablePlaybackRates(val);
        }, onGetPlaybackQuality(val) {
            return this.$refs.yt.player.getPlaybackQuality(val);
        }, onSetPlaybackQuality(val) {
            return this.$refs.yt.player.setPlaybackQuality(val);
        }, onGetAvailableQualityLevels(val) {
            return this.$refs.yt.player.getAvailableQualityLevels(val);
        }, onGetCurrentTime(val) {
            return this.$refs.yt.player.getCurrentTime(val);
        }, onGetDuration(val) {
            return this.$refs.yt.player.getDuration(val);
        }, onRemoveEventListener(val) {
            return this.$refs.yt.player.removeEventListener(val);
        }, onGetDebugText(val) {
            return this.$refs.yt.player.getDebugText(val);
        }, onGetVideoData(val) {
            return this.$refs.yt.player.getVideoData(val);
        }, onAddCueRange(val) {
            return this.$refs.yt.player.addCueRange(val);
        }, onRemoveCueRange(val) {
            return this.$refs.yt.player.removeCueRange(val);
        }, onGetApiInterface(val) {
            return this.$refs.yt.player.getApiInterface(val);
        }, onShowVideoInfo(val) {
            return this.$refs.yt.player.showVideoInfo(val);
        }, onHideVideoInfo(val) {
            return this.$refs.yt.player.hideVideoInfo(val);
        }, onIsVideoInfoVisible(val) {
            return this.$refs.yt.player.isVideoInfoVisible(val);
        }, onGetSphericalProperties(val) {
            return this.$refs.yt.player.getSphericalProperties(val);
        }, onSetSphericalProperties(val) {
            return this.$refs.yt.player.setSphericalProperties(val);
        }, onGetVideoUrl(val) {
            return this.$refs.yt.player.getVideoUrl(val);
        }, onGetMediaReferenceTime(val) {
            return this.$refs.yt.player.getMediaReferenceTime(val);
        }, onGetSize(val) {
            return this.$refs.yt.player.getSize(val);
        }, onLogImaAdEvent(val) {
            return this.$refs.yt.player.logImaAdEvent(val);
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
