import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import io from "socket.io-client"
import VueSocketIO from "vue-socket.io"
import VuePlayerPlugin from 'vue-youtube-iframe-api'

Vue.config.productionTip = false

const connection = ""
const SocketInstance = io(connection)

Vue.use(
  new VueSocketIO({
    connection: SocketInstance
  })
);

Vue.use(VuePlayerPlugin)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
