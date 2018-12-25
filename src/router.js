import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopCartContainer from './components/tabbar/ShopCartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'//.vue后缀不可以省略
import newsList from './components/news/newsList.vue'
var router=new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcart',component:ShopCartContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newsList',component:newsList}
  ],
linkActiveClass:'mui-active'
});
export default router