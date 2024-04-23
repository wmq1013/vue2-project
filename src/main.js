import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// animate动画库
import animate from 'animate.css'

Vue.use(animate)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
