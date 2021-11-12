module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://0.0.0.0:3100",
        changeOrigin: true,
      },
      "^/socket.io": {
        target: "http://0.0.0.0:3100",
        changeOrigin: true,
      },
    },
  },
};
