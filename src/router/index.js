//导入Vue 后面要use
import Vue from 'vue'
// 1.导入路由
import VueRouter from 'vue-router'
// 2.`use`一下
Vue.use(VueRouter)
// 3.注册路由信息
const routes = []
// 4.实例化路由对象
const router = new VueRouter({
  // es6的简化写法，解构赋值
  routes
  // new VueRouter时 路由的数组属性名必须叫做routes
  //routes:routes
})
export default router