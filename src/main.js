// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Show from './components/Show'
import Add from './components/Add'
import List from './components/List'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
/* eslint-disable no-new */
Vue.use(VueRouter);
const routes=[
	{
		path:'/',
		component:Show
	},
	{
		path:'/home',
		component:Show
	},
	{
		path:'/add',
		component:Add
	},
	{
		path:'/notelist',
		name:'notelist',
		component:List
	}
];
const router=new VueRouter({
	routes
})
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
