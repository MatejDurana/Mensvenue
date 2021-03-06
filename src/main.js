import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/style.scss";
import vuetify from "./plugins/vuetify";
import VueMaterial from "vue-material";

Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
