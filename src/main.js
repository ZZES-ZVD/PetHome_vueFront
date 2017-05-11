import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
 

const Index = resolve => {require.ensure([],() => {resolve(require('./components/index.vue'))})};
const Home = resolve => {require.ensure([], () => {resolve(require('./components/home.vue'))})};
const Status = resolve => {require.ensure([], () => {resolve(require('./components/status.vue'))})};
const Hardware = resolve => {require.ensure([], () => {resolve(require('./components/hardware.vue'))})};
const Software = resolve => {require.ensure([], () => {resolve(require('./components/software.vue'))})};
const Workdoc = resolve => {require.ensure([], () => {resolve(require('./components/workdoc.vue'))})};
const Workrun = resolve => {require.ensure([], () => {resolve(require('./components/workrun.vue'))})};
const Aboutus = resolve => {require.ensure([], ()=> {resolve(require('./components/aboutus.vue'))})};

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
	{path:'/',component:Index},
	{path:'/home',component:Home},
	{path:'/status',component:Status},
	{path:'/hardware',component:Hardware},
	{path:'/software',component:Software},
	{path:'/workdoc',component:Workdoc},
	{path:'/workrun',component:Workrun},
	{path:'/aboutus',component:Aboutus}
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
