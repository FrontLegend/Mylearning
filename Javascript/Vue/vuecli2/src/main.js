import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import Meta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(Meta);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
