import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Detail from "../views/BillDetail.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta:{protected: true},
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/new-bill',
    name: 'NewBill',
    meta:{protected: true},
    component: () => import('../views/NewBill.vue')
  },
  {
    path: '/bills/:billId',
    name: 'Detail',
    meta:{protected: true},
    component: Detail
  },
  {
    path: '*',
    name: 'Default',
    redirect: '/login',
    //component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.protected){
    localStorage.getItem('user') ? next() : next('/login');
  }
  else{
    localStorage.getItem('user') ? next('/home') : next();
  }
})

export default router
