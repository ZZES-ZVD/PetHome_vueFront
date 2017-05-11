import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
 

const Index = resolve => {require.ensure([],() => {resolve(require('./components/index.vue'))})};
const Home = resolve => {require.ensure([], () => {resolve(require('./components/home.vue'))})};
const Status = resolve => {require.ensure([], () => {resolve(require('./components/status.vue'))})};


Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
	{path:'/',component:Index},
	{path:'/home',component:Home},
	{path:'/status',component:Status}
]

const router = new VueRouter({
	mode:'history',
	routes
});

new Vue({
	el:'#app',
	router,
  	render: h => h(App)
})
