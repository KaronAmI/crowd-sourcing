import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/login/register'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/cs/register',
      name: 'register',
      component: register
    },
    {
      path: '/cs/login',
      name: 'login',
      component: login
    }
  ]
})
