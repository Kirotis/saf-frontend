module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://10.10.130.111:3100",
        changeOrigin: true,
      },
      "^/socket.io": {
        target: "http://10.10.130.111:3100",
        changeOrigin: true,
      },
    },
  },
};
