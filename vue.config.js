module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://192.168.0.100:3100",
        changeOrigin: true,
      },
      "^/socket.io": {
        target: "http://192.168.0.100:3100",
        changeOrigin: true,
      },
    },
  },
};
