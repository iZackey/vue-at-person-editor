import Vue from 'vue';
import App from './App.vue';
import VueAtPersonEditor from '../lib/install';

Vue.config.productionTip = false;
Vue.use(VueAtPersonEditor);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
