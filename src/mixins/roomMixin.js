export default {
  props: {
    roomName: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    activeUrl: "",
    newHref: "",
    logs: ["Welcome to logs"],
  }),
  sockets: {
    setHref(href) {
      this.activeUrl = href;
    },
    sendLog(log) {
      this.logs.push(log);
    },
    roomIsDeliting() {
      this.$router.push("/");
    },
  },
  methods: {
    editHref() {
      this.$socket.emit("editHref", this.roomName, this.newHref);
    },
  },
};
