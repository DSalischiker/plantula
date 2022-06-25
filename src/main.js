import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

Vue.use(Buefy);
Vue.use(VueToast, {
  position: "bottom",
});

Vue.config.productionTip = false

new Vue({
  created() {
    const html = document.documentElement ;// returns the html tag
    html.setAttribute('lang', 'es');
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')


