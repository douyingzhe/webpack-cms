import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import VueResource from 'vue-resource'
Vue.use(VueResource);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header,Swipe,SwipeItem} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
import router from './router'
import app from'./App.vue'
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
});
